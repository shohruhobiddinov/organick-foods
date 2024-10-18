import React, { useState } from 'react';
import { Button, Input, message } from "antd";

const { TextArea } = Input;

function Registration(props) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};

        if (!formData.fullName) formErrors.fullName = "Full Name is required";
        if (!formData.email) formErrors.email = "Email is required";
        if (!formData.company) formErrors.company = "Company is required";
        if (!formData.subject) formErrors.subject = "Subject is required";
        if (!formData.message) formErrors.message = "Message is required";

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            const token = '7059302754:AAGChb5bbs0nbJSlON7Wus1VADd9YOGZ418'; // Telegram bot token
            const chat_id = '1736820935'; // Your chat ID

            const text = `
                From Organic Foods\nFull Name: ${formData.fullName}\nEmail: ${formData.email}\nCompany: ${formData.company}\nSubject: ${formData.subject}\nMessage: ${formData.message}
            `;

            try {
                const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: chat_id,
                        text: text,
                    }),
                });

                if (response.ok) {
                    message.success("Message sent successfully!");
                    setFormData({ fullName: '', email: '', company: '', subject: '', message: '' });
                } else {
                    message.error("Failed to send the message.");
                }
            } catch (error) {
                message.error("An error occurred while sending the message.");
            }
        } else {
            message.error("Please fill in all required fields.");
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className={"w-full"}>
            <div className={"sm:px-0 md:px-[5%] flex flex-wrap gap-[2%] pt-[10%]"}>
                <div className={"sm:w-full md:w-[48%]"}>
                    <label className={"text-[#274C5B] font-bold"}>Full Name*</label>
                    <Input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder={"Your Full Name"}
                        className={`my-3 rounded-2xl p-5 border w-[100%] ${errors.fullName ? 'border-red-500' : 'border-[#7EB693]'}`}
                    />
                    {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                </div>

                <div className={"sm:w-full md:w-[49%]"}>
                    <label className={"text-[#274C5B] font-bold"}>Your Email*</label>
                    <Input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={"example@yourmail.com"}
                        className={`my-3 rounded-2xl p-5 border w-[100%] ${errors.email ? 'border-red-500' : 'border-[#7EB693]'}`}
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>

                <div className={"sm:w-full md:w-[48%]"}>
                    <label className={"text-[#274C5B] font-bold"}>Company*</label>
                    <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={"Your company name"}
                        className={`my-3 rounded-2xl p-5 border w-[100%] ${errors.company ? 'border-red-500' : 'border-[#7EB693]'}`}
                    />
                    {errors.company && <p className="text-red-500">{errors.company}</p>}
                </div>

                <div className={"sm:w-full md:w-[49%]"}>
                    <label className={"text-[#274C5B] font-bold"}>Subject*</label>
                    <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={"How can we help?"}
                        className={`my-3 rounded-2xl p-5 border w-[100%] ${errors.subject ? 'border-red-500' : 'border-[#7EB693]'}`}
                    />
                    {errors.subject && <p className="text-red-500">{errors.subject}</p>}
                </div>

                <div className={"w-full"}>
                    <label className={"text-[#274C5B] font-bold"}>Message*</label>
                    <TextArea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={"Hello there, I would like to talk about..."}
                        className={`my-3 rounded-2xl px-5 pt-5 pb-[50px] border w-[100%] ${errors.message ? 'border-red-500' : 'border-[#7EB693]'}`}
                    />
                    {errors.message && <p className="text-red-500">{errors.message}</p>}
                </div>

                <div className={"w-full"}>
                    <Button
                        onClick={handleSubmit}
                        className={"mt-3 bg-[#274C5B] text-white font-bold py-7 px-10"}
                        type={"submit"}
                    >
                        Send Message
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Registration;
