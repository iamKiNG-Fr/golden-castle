
const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const Mailgen = require('mailgen')
require('dotenv').config();

const {users} = require('../sequelize/models')

router.post('', async (req, res) => {
    try {
        const {first_name, last_name, phone, email, type, about_event, about_cater, about_video, head_count, budget, enquiry} = req.body
        

        let errors = []
       
        // form validation 

        if(first_name == ''){
            errors.push({message : "First Name cannot be empty"})
        }
        if(email == ''){
            errors.push({message : "enter your email"})
        }
        if(phone == ''){
            errors.push({message : "Phone number cannot be empty"})
        }
        if(last_name == ''){
            errors.push({message : "Last Name cannot be empty"})
        }
        if(errors.length > 0 ){
            console.log(errors);
            res.render('contact', {title: 'Golden Castle | Contact', errors, user: req.body})
        }
        else{
           
            // create reusable transporter Object
            let config={
                service: "gmail",
                auth: {
                    user: `${process.env.EMAIL}`,
                    pass: `${process.env.PASSWORD}`

                }
            }

            let transporter = nodemailer.createTransport(config)

            var mailGenerator = new Mailgen({
                theme: 'default',
                product: {
                    // Appears in header & footer of e-mails
                    name: 'Golden Castle',
                    link: 'https://goldencastleeventsplustv.com/',
                    // Optional product logo
                    logo: 'https://goldencastleeventsplustv.com/img/GCElogo.png'
                }
            });

            let response1 = {
                body: {
                    name: `${first_name} ${last_name} `,
                    intro: 'We have recieved your message and will be in touch.',
                    // action: {
                    //     instructions: 'To get started with Mailgen, please click here:',
                    //     button: {
                    //         color: '#22BC66', // Optional action button color
                    //         text: 'Confirm your account',
                    //         link: 'https://mailgen.js/confirm?s=d9729feb74992cc3482b350163a1a010'
                    //     }
                    // },
                    outro: 'Creating a memorable event begins here..'
                }
            };
            let response2 = {
                body: {
                    name: 'Golden Crew',
                    intro: `New Enquiry from ${first_name} ${last_name}`,
                    table: {
                        data:[
                            {

                                phone: `${phone}`,
                                equiry_type: `${type}`,
                                description: `${enquiry}` || `${about_cater}` || `${about_event}` || `${about_video}`,
                                budget: `${budget}`,
                                headcount: `${head_count}`
                            }
                        ]
                    },
                    outro: 'Creating a memorable event begins here..'
                }
            };

            var clientmail = mailGenerator.generate(response1);
            var ourmail = mailGenerator.generate(response2);

            let clientmessage = {
                from: process.env.EMAIL,
                to: `${email}`,
                subject: "Enquiry Recieved - Golden Castle Events + Tv",
                html: clientmail
            }
            let ourmessage = {
                from: process.env.EMAIL,
                to: process.env.EMAIL,
                subject: `New Enquiry from ${first_name} ${last_name}`,
                html: ourmail
            }
            
            
            const user = await users.create({first_name, last_name, phone, email, })
            
            // send mail with the define transport object
            console.log('enquiry sent')
            transporter.sendMail(clientmessage).then(()=>{
                console.log('sent client')
            }).catch(error => {
                console.error(error)
            })
            transporter.sendMail(ourmessage).then(()=>{
               console.log('sent our')
            }).catch(error => {
                console.error(error);
            })
    
            
            return res.redirect('/contact/success')

        }
    } catch (error) {
        console.error(error);
    }
})

module.exports = router