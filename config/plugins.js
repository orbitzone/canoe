module.exports = ({ env }) => ({
    email: {
      config: {
        provider: env('EMAIL_PROVIDER'),
        providerOptions: {
          secure: false, // For port 587 or 25 keep it false
          requireTLS: true, // if this is true and secure is false then Nodemailer will try to use STARTTLS
          rejectUnauthorized: true,
          host: env('EMAIL_SMTP_HOST', 'smtp.example.com'),
          port: env('EMAIL_SMTP_PORT', 587),
          auth: {
            user: env('EMAIL_SMTP_USER'),
            pass: env('EMAIL_SMTP_PASS'),
          },
        },
        settings: {
          defaultFrom: env('EMAIL_ADDRESS_FROM'),
          defaultReplyTo: env('EMAIL_ADDRESS_REPLY'),
          testAddress: 'felipe.santiago@viewdeck.com'
        },
      },
    },
    keycloak: {
        enabled: true,
    },    
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET', ''),
        },
    },
});