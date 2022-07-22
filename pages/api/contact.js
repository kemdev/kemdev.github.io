// The toturial for this is here; https://dev.to/kennymark/how-to-send-serverless-emails-with-next-js-and-sengrid-40lj
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.EMAIL_API_KEY);

// const template = (name, message, email) => `<!DOCTYPE html>
// <html>
//   <body style="display: grid; place-content: center; background: #151515; color: #fff">
//     <img src='http://cdn.mcauto-images-production.sendgrid.net/6cdb6e2a3269311e/2bf034b3-391f-4017-b206-7ab0c84847d2/192x192.png' alt='k logo' />
//     <p>Message from ${name}!</p>
//     <p>Email: ${email}!</p>
//     <p>Message: ${message}</p>
//   </body>
// </html>`;
const template = (name, message, email, phone) => `<!DOCTYPE html">
<html>

<body>
  <center class="wrapper" data-link-color="#842b89"
    data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#dcd9d9; background-color:#151515;">
    <div class="webkit">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#151515">
        <tr>
          <td valign="top" bgcolor="#151515" width="100%">
            <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0"
              border="0">
              <tr>
                <td width="100%">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td>
                        <!--[if mso]>
    <center>
    <table><tr><td width="800">
  <![endif]-->
                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                          style="width:100%; max-width:800px;" align="center">
                          <tr>
                            <td role="modules-container"
                              style="padding:0px 0px 0px 0px; color:#dcd9d9; text-align:left;" bgcolor="#151515"
                              width="100%" align="left">
                              <table class="module preheader preheader-hide" role="module" data-type="preheader"
                                border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
                                <tr>
                                  <td role="module-content">
                                    <p>sdsd</p>
                                  </td>
                                </tr>
                              </table>
                              <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0"
                                cellspacing="0" width="100%" style="table-layout: fixed;"
                                data-muid="6c540e1e-d833-4ae7-a3d8-1fc1d59c3ee2">
                                <tbody>
                                  <tr>
                                    <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top"
                                      align="center">
                                      <img class="max-width" border="0"
                                        style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:20% !important; width:20%; height:auto !important;"
                                        width="160" alt="" data-proportionally-constrained="true" data-responsive="true"
                                        src="http://cdn.mcauto-images-production.sendgrid.net/6cdb6e2a3269311e/2bf034b3-391f-4017-b206-7ab0c84847d2/192x192.png">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="module" role="module" data-type="spacer" border="0" cellpadding="0"
                                cellspacing="0" width="100%" style="table-layout: fixed;"
                                data-muid="1e532cb2-b16b-4137-8d8d-f8e5b86fea6c">
                                <tbody>
                                  <tr>
                                    <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="module" role="module" data-type="text" border="0" cellpadding="0"
                                cellspacing="0" width="100%" style="table-layout: fixed;"
                                data-muid="53c789e6-e3b0-4c3b-9326-2f5b9160aeae" data-mc-module-version="2019-10-22">
                                <tbody>
                                  <tr>
                                    <td style="padding:18px 0px 18px 0px; line-height:40px; text-align:inherit;"
                                      height="100%" valign="top" bgcolor="" role="module-content">
                                      <div>
                                        <h1 style="text-align: inherit"><span
                                            style="font-family: 'courier new', courier, monospace"><strong>Message
                                              from: ${name} &lt;</strong></span><span
                                            style="color: #dcd9d9; font-family: 'courier new', courier, monospace; font-size: 28px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 700; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(21, 21, 21); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline">${email}</span>&gt;<span
                                            style="font-family: 'courier new', courier, monospace"><strong>&nbsp;</strong></span>
                                        </h1>
                                        <h1 style="text-align: inherit">Phone Number: ${phone}</h1>
                                        <div></div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="module" role="module" data-type="text" border="0" cellpadding="0"
                                cellspacing="0" width="100%" style="table-layout: fixed;"
                                data-muid="f48cb534-126f-4dff-b777-be9a8708b15e" data-mc-module-version="2019-10-22">
                                <tbody>
                                  <tr>
                                    <td style="padding:18px 0px 18px 0px; line-height:40px; text-align:inherit;"
                                      height="100%" valign="top" bgcolor="" role="module-content">
                                      <div>
                                        <h1 style="text-align: inherit">Message:</h1><span> ${message}</span>
                                        <div></div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table class="module" role="module" data-type="text" border="0" cellpadding="0"
                                cellspacing="0" width="100%" style="table-layout: fixed;"
                                data-muid="25b8c595-ebf4-4baf-bf34-d79b33b6f24d" data-mc-module-version="2019-10-22">
                                <tbody>
                                  <tr>
                                    <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;"
                                      height="100%" valign="top" bgcolor="" role="module-content">
                                      <div>
                                        <div style="font-family: inherit; text-align: inherit">alarmanazi.me</div>
                                        <div></div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            <![endif]-->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </center>
</body>

</html>`;

export default async (req, res) => {
  const { email, phone, message, firstName, lastName } = req.body;
  const name = firstName + " " + lastName;
  const msg = {
    to: "abdulkarim.alarmanazi@gmail.com",
    from: "abdulkarim.alarmanazi@gmail.com",
    name,
    subject: "New Message from " + name,
    phone,
    text: message,
    html: template(name, message, email, phone),
  };

  try {
    await sgMail.send(msg);
    res.json({ success: true, message: `Message has been sent` });
  } catch (error) {
    console.log("error is", error.response.body);
    res.status(500).json({
      success: false,
      message: "Error sending email, please try again later!",
      error: error,
    });
  }
};
