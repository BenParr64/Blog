module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fc472766c8530c2df6b09e9afd864413'),
  },
});
