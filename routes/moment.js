import express from 'express';
import { upload, videoUpload, imageUpload } from '../middleware/multer.js';
import {
	getGalleryImages,
	getMomentVideos,
	uploadMultipleMoments,
	uploadImage,
	getMoments,
	uploadVideo,
	uploadMultipleImages,
} from '../controllers/moment.js';

const router = express.Router();

router.get('/', getMoments);
router.post('/upload-image', upload.single('image'), uploadImage);
router.post(
	'/upload-images',
	imageUpload.array('images', 5),
	uploadMultipleImages
);
router.post('/upload-video', videoUpload.single('video'), uploadVideo);
router.post('/upload-combo', upload.array('files'), uploadMultipleMoments);
router.get('/gallery', getGalleryImages);
router.get('/videos', getMomentVideos);

export default router;
