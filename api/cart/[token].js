export default function handler(req, res) {
  const { token } = req.query;

  const redirectUrl =
    `https://fastrr-boost-ui.pickrr.com/headless/?cart-resume-id=${token}&seller-domain=wetoytoy.com&type=report`;

  res.redirect(302, redirectUrl);
}
