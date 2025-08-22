import express from 'express';
import { upload, videoUpload, imageUpload } from '../middleware/multer.js';
import {
	getGalleryImages,
	getWeddingVideos,
	uploadMultipleWeddings,
	uploadImage,
	getWeddings,
	uploadVideo,
	uploadMultipleImages,
	deleteImages,
} from '../controllers/wedding.js';
import { requireAuth, verifyPermission } from '../middleware/requireAuth.js';

const router = express.Router();

router.get('/', getWeddings);
router.get('/gallery', getGalleryImages);
router.get('/videos', getWeddingVideos);
router.post('/upload-image', upload.single('image'), uploadImage);
router.post(
	'/upload-images',
	imageUpload.array('images', 5),
	uploadMultipleImages
);
router.post('/upload-video', videoUpload.single('video'), uploadVideo);
router.post('/uploads', upload.array('files'), uploadMultipleWeddings);
router.delete('/', requireAuth, verifyPermission(['ADMIN']), deleteImages);

export default router;
