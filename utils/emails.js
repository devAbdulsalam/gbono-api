const companyName = 'Verclary';
const companyLink = 'https://verclary.vercel.app';
const companyLogo = 'https://imgur.com/DKNDGah';
const expireTime =
	'This link will expire in 15 minutes and can only be used once.';
const contactMail = 'verclary@gmail.com';
const supportCenter = 'support@verclary.com';
const supportLink = 'support@verclary.com';

export const VerifyAccountEmail = ({ link, userName }) => {
	const companyName = 'Verclary';
	const companyLink = 'Verclary';
	const companyLogo = 'Verclary';
	const expireTime =
		'This link will expire in 15 minutes and can only be used once.';
	const contactMail = 'verclary@gmail.com';
	const supportCenter = 'support@verclary.com';
	const supportLink = 'support@verclary.com';

	return `<!DOCTYPE html>
					<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
					<head>
						<meta charset="utf-8">
						<meta name="viewport" content="width=device-width">
						<meta http-equiv="X-UA-Compatible" content="IE=edge">
						<meta name="x-apple-disable-message-reformatting">
						<title>OTP verification email</title>
						
						<link href="https://fonts.googleapis.com/css?family=Roboto:400,600" rel="stylesheet" type="text/css">
						<!-- Web Font / @font-face : BEGIN -->
						<!--[if mso]>
							<style>
								* {
									font-family: 'Roboto', sans-serif !important;
								}
							</style>
						<![endif]-->

						<!--[if !mso]>
							<link href="https://fonts.googleapis.com/css?family=Roboto:400,600" rel="stylesheet" type="text/css">
						<![endif]-->

						<!-- Web Font / @font-face : END -->

						<!-- CSS Reset : BEGIN -->
						
						
						<style>
							/* What it does: Remove spaces around the email design added by some email clients. */
							/* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
							html,
							body {
								margin: 0 auto !important;
								padding: 0 !important;
								height: 100% !important;
								width: 100% !important;
								font-family: 'Roboto', sans-serif !important;
								font-size: 14px;
								margin-bottom: 10px;
								line-height: 24px;
								color: #8094ae;
								font-weight: 400;
							}
							* {
								-ms-text-size-adjust: 100%;
								-webkit-text-size-adjust: 100%;
								margin: 0;
								padding: 0;
							}
							table,
							td {
								mso-table-lspace: 0pt !important;
								mso-table-rspace: 0pt !important;
							}
							table {
								border-spacing: 0 !important;
								border-collapse: collapse !important;
								table-layout: fixed !important;
								margin: 0 auto !important;
							}
							table table table {
								table-layout: auto;
							}
							a {
								text-decoration: none;
							}
							img {
								-ms-interpolation-mode:bicubic;
							}
						</style>

					</head>

					<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f5f6fa;">
						<div style="width: 100%; background-color: #f5f6fa;">
							<table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f5f6fa">
								<tr>
								<td style="padding: 40px 0;">
										<table style="width:100%;max-width:620px;margin:0 auto;">
											<tbody>
												<tr>
													<td style="text-align: center; padding-bottom:25px">
														<a href=${companyLink}><img style="height: 40px; border-radius: 50%; border: 1px solid gray;" src=${companyLogo} alt="logo"></a>
														<p style="font-size: 14px; color: #6576ff; padding-top: 12px;">${companyName}</p>
													</td>
												</tr>
											</tbody>
										</table>
										<table style="width:100%;max-width:620px;margin:0 auto;background-color:#ffffff;">
											<tbody>
												<tr>
													<td style="padding: 30px 30px 15px 30px;">
														<h2 style="font-size: 18px; color: #6576ff; font-weight: 600; margin: 0;">Confirm Your E-Mail Address</h2>
													</td>
												</tr>
												<tr>
													<td style="padding: 0 30px 20px">
														<p style="margin-bottom: 10px;">Hi ${userName || 'User'},</p>
														<p style="margin-bottom: 10px;">Welcome! <br> You are receiving this email because you have registered on our site.</p>
														<p style="margin-bottom: 10px;">Click the link below to activate your account.</p>
														<p style="margin-bottom: 25px;">${expireTime}</p>
														<a href=${link} style="background-color:#6576ff;border-radius:4px;color:#ffffff;display:inline-block;font-size:13px;font-weight:600;line-height:44px;text-align:center;text-decoration:none;text-transform: uppercase; padding: 0 30px">Verify Email</a>
													</td>
												</tr>
												<tr>
													<td style="padding: 0 30px">
														<h4 style="font-size: 15px; color: #000000; font-weight: 600; margin: 0; text-transform: uppercase; margin-bottom: 10px">or</h4>
														<p style="margin-bottom: 10px;">If the button above does not work, paste this link into your web browser:</p>
														<a href=${link} style="color: #6576ff; text-decoration:none;word-break: break-all;">${link}</a>
													</td>
												</tr>
												<tr>
													<td style="padding: 20px 30px 40px">
														<p>If you did not make this request, please contact us or ignore this message.</p>
														<p style="margin: 0; font-size: 13px; line-height: 22px; color:#9ea8bb;">This is an automatically generated email please do not reply to this email. If you face any issues, please contact us at ${contactMail}</p>
													</td>
												</tr>
											</tbody>
										</table>
										<table style="width:100%;max-width:620px;margin:0 auto;">
											<tbody>
												<tr>
													<td style="text-align: center; padding:25px 20px 0;">
														<p style="font-size: 13px;">Copyright © 2021 Verclary. All rights reserved. <br><a style="color: #6576ff; text-decoration:none;" href=${companyLink}>${companyName}</a>.</p>
														<ul style="margin: 10px -4px 0;padding: 0;">
															<li style="display: inline-block; list-style: none; padding: 4px;"><a style="display: inline-block; height: 30px; width:30px;border-radius: 50%; background-color: #ffffff" href="#"><img style="width: 30px" src="images/brand-b.png" alt="brand"></a></li>
															<li style="display: inline-block; list-style: none; padding: 4px;"><a style="display: inline-block; height: 30px; width:30px;border-radius: 50%; background-color: #ffffff" href="#"><img style="width: 30px" src="images/brand-e.png" alt="brand"></a></li>
															<li style="display: inline-block; list-style: none; padding: 4px;"><a style="display: inline-block; height: 30px; width:30px;border-radius: 50%; background-color: #ffffff" href="#"><img style="width: 30px" src="images/brand-d.png" alt="brand"></a></li>
															<li style="display: inline-block; list-style: none; padding: 4px;"><a style="display: inline-block; height: 30px; width:30px;border-radius: 50%; background-color: #ffffff" href="#"><img style="width: 30px" src="images/brand-c.png" alt="brand"></a></li>
														</ul>
														<p style="padding-top: 15px; font-size: 12px;">This email was sent to you as a registered user of <a style="color: #6576ff; text-decoration:none;" href=${supportLink}>${supportCenter}</a>. To update your emails preferences <a style="color: #6576ff; text-decoration:none;" href="#">click here</a>.</p>
													</td>
												</tr>
											</tbody>
										</table>
								</td>
								</tr>
							</table>
						</div>
					</body>
					</html>`;
};
export const resetPasswordEmail = ({ link, otp, userName }) => {
	return `<!DOCTYPE html>
					<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
					<head>
						<meta charset="utf-8">
						<meta name="viewport" content="width=device-width">
						<meta http-equiv="X-UA-Compatible" content="IE=edge">
						<meta name="x-apple-disable-message-reformatting">
						<title>OTP verification email</title>
						
						<link href="https://fonts.googleapis.com/css?family=Roboto:400,600" rel="stylesheet" type="text/css">
						<!-- Web Font / @font-face : BEGIN -->
						<!--[if mso]>
							<style>
								* {
									font-family: 'Roboto', sans-serif !important;
								}
							</style>
						<![endif]-->

						<!--[if !mso]>
							<link href="https://fonts.googleapis.com/css?family=Roboto:400,600" rel="stylesheet" type="text/css">
						<![endif]-->

						<!-- Web Font / @font-face : END -->

						<!-- CSS Reset : BEGIN -->
						
						
						<style>
							/* What it does: Remove spaces around the email design added by some email clients. */
							/* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
							html,
							body {
								margin: 0 auto !important;
								padding: 0 !important;
								height: 100% !important;
								width: 100% !important;
								font-family: 'Roboto', sans-serif !important;
								font-size: 14px;
								margin-bottom: 10px;
								line-height: 24px;
								color: #8094ae;
								font-weight: 400;
							}
							* {
								-ms-text-size-adjust: 100%;
								-webkit-text-size-adjust: 100%;
								margin: 0;
								padding: 0;
							}
							table,
							td {
								mso-table-lspace: 0pt !important;
								mso-table-rspace: 0pt !important;
							}
							table {
								border-spacing: 0 !important;
								border-collapse: collapse !important;
								table-layout: fixed !important;
								margin: 0 auto !important;
							}
							table table table {
								table-layout: auto;
							}
							a {
								text-decoration: none;
							}
							img {
								-ms-interpolation-mode:bicubic;
							}
						</style>

					</head>

					<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #f5f6fa;">
						<div style="width: 100%; background-color: #f5f6fa;">
							<table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f5f6fa">
								<tr>
								    <td style="padding: 40px 0;">
										<table style="width:100%;max-width:620px;margin:0 auto;">
											<tbody>
												<tr>
													<td style="text-align: center; padding-bottom:25px">
														<a href=${companyLink}><img style="height: 40px; border-radius: 50%; border: 1px solid gray;" src=${companyLogo} alt="logo"></a>
														<p style="font-size: 14px; color: #6576ff; padding-top: 12px;">${companyName}</p>
													</td>
												</tr>
											</tbody>
										</table>
                                        <!-- table start ends-->                                        
                                        <table style="width:100%;max-width:620px;margin:0 auto;background-color:#ffffff;">
                                            <tbody>
                                                <tr>
                                                    <td style="text-align:center;padding: 30px 30px 15px 30px;">
                                                        <h2 style="font-size: 18px; color: #14913c; font-weight: 600; margin: 0;">Reset Password</h2>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="text-align:center;padding: 0 30px 20px">
                                                        <p style="margin-bottom: 10px;">Hi ${
																													userName || 'User'
																												},</p>
                                                        <p style="margin-bottom: 25px;">Verify your Account by using this OTP <b>${otp}</b> in your app, valid for 10 Minutes.</p>
                                                        <a href=${link} style="background-color:#10a76b;border-radius:4px;color:#ffffff;display:inline-block;font-size:13px;font-weight:600;line-height:44px;text-align:center;text-decoration:none;text-transform: uppercase; padding: 0 25px">Reset Password</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="text-align:center;padding: 20px 30px 40px">
                                                        <p>If you did not make this request, please contact us or ignore this message.</p>
                                                        <p style="margin: 0; font-size: 13px; line-height: 22px; color:#9ea8bb;">This is an automatically generated email please do not reply to this email. If you face any issues, please contact us at  verclary@gmail.com</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>                                    
										<table style="width:100%;max-width:620px;margin:0 auto;">
											<tbody>
												<tr>
													<td style="text-align: center; padding:25px 20px 0;">
														<p style="font-size: 13px;">Copyright © 2021 Verclary. All rights reserved. <br><a style="color: #6576ff; text-decoration:none;" href=${companyLink}>${companyName}</a>.</p>
														<ul style="margin: 10px -4px 0;padding: 0;">
															<li style="display: inline-block; list-style: none; padding: 4px;"><a style="display: inline-block; height: 30px; width:30px;border-radius: 50%; background-color: #ffffff" href="#"><img style="width: 30px" src="images/brand-b.png" alt="brand"></a></li>
															<li style="display: inline-block; list-style: none; padding: 4px;"><a style="display: inline-block; height: 30px; width:30px;border-radius: 50%; background-color: #ffffff" href="#"><img style="width: 30px" src="images/brand-e.png" alt="brand"></a></li>
															<li style="display: inline-block; list-style: none; padding: 4px;"><a style="display: inline-block; height: 30px; width:30px;border-radius: 50%; background-color: #ffffff" href="#"><img style="width: 30px" src="images/brand-d.png" alt="brand"></a></li>
															<li style="display: inline-block; list-style: none; padding: 4px;"><a style="display: inline-block; height: 30px; width:30px;border-radius: 50%; background-color: #ffffff" href="#"><img style="width: 30px" src="images/brand-c.png" alt="brand"></a></li>
														</ul>
														<p style="padding-top: 15px; font-size: 12px;">This email was sent to you as a registered user of <a style="color: #6576ff; text-decoration:none;" href=${supportLink}>${supportCenter}</a>. To update your emails preferences <a style="color: #6576ff; text-decoration:none;" href="#">click here</a>.</p>
													</td>
												</tr>
											</tbody>
										</table>
								    </td>
								</tr>
							</table>
						</div>
					</body>
					</html>`;
};
