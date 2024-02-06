'use strict'

module.exports = {
    afterCreate: async (ctx) => {
        // try{
        //   let email; let firstname; let lastname;

        //     email = ctx.result.email;
        //     firstname = ctx.result.firstname;
        //     lastname = ctx.result.lastname;
          
        //     const startDate = new Date(Date.parse(ctx.result.startDate));
        //     const endDate = new Date(Date.parse(ctx.result.endDate));

        //     await strapi
        //     .plugin('email-designer')
        //     .service('email')
        //     .sendTemplatedEmail(
        //         {
        //           to: email,
        //           attachments: [],
        //         },
        //         {
        //           templateReferenceId: 3,
        //           subject: `{{= USER.firstname }}, welcome to Desk Surfer!`,
        //         },
        //         {
        //           USER: {
        //             firstname: firstname,
        //             lastname: lastname,
        //           }
        //         }
        //       );
        //       strapi.log.debug('📺: Email sent - New user created');
        // } catch(err){
        //     strapi.log.debug('📺: ', err);
        // }
    }
}