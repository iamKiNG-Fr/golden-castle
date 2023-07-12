const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

const {users} = require('../sequelize/models')

router.post('', async (req, res) => {
    try {
        const {first_name, last_name, phone, email, type, about_event, about_cater, aboutt_video, head_count, budget, enquiry} = req.body

        let testAaccount = await nodemailer.createTestAccount()

        // create reusable transporter Object
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: testAaccount.user,
                pass:testAaccount.pass
            }
        })

        // send mail with the define transport object

        let message = {
            from: '"fred" <foo@eg.com>',
            to: "bar@eg.com, bro@eg.com",
            subject: "test",
            text: "hello",
            html: "<h2>hello</h2>"
        }

        transporter.sendMail(message).then(()=>{
            return res.status(201).json({msg:"Enquiry Sent, We'll be in touch"})
        }).catch(error => {
            return res.status(500).json({error })
        })

        let errors = []
       
        // form validation 

        if(first_name == ''){
            errors.push({message : "First Name cannot be empty"})
        }
        // if(email == ''){
        //     errors.push({message : "enter your email"})
        // }
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
           
            const user = await users.create({first_name, last_name, phone, email, })
        
            console.log('enquiry sent')
            
            // return res.redirect('/auth/success')
            return res.json('success')
                   
        
        }
    } catch (error) {
        console.error(error);
    }
})

module.exports = router