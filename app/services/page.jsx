"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { Description } from "@radix-ui/react-dialog";


const services = [

    {
        num: "01",
        title: "API & Server-Side Development",
        description: "Develop robust RESTful and GraphQL APIs, alongside server-side applications using frameworks like Django, Node.js, and Express, ensuring secure and efficient backend functionality.",
        href: ""
    },
    {
        num: "02",
        title: "Database Design & Optimization",
        description: "Design efficient database schemas, manage migrations, and optimize performance for both relational and NoSQL databases, including PostgreSQL, MySQL, and MongoDB.",
        href: ""
    },
    {
        num: "03",
        title: "Cloud Solutions & AWS Expertise",
        description: "Architect and deploy scalable cloud infrastructure with AWS services such as EC2, S3, RDS, and Lambda, optimizing applications for performance and scalability.",
        href: ""
    },
    {
        num: "04",
        title: "Authentication, Security & Integrations",
        description: "Implement secure authentication (JWT, OAuth2, 2FA), enforce data encryption, and integrate third-party APIs such as payment gateways and social media services.",
        href: ""
    },
    {
        num: "05",
        title: "Performance Optimization & Monitoring",
        description: "Optimize server performance, reduce latency, and manage resource allocation to ensure high-speed performance, along with setting up monitoring tools for proactive management.",
        href: ""
    },
    {
        num: "06",
        title: "DevOps & Continuous Delivery",
        description: "Set up automated CI/CD pipelines for seamless deployment, testing, and continuous integration to ensure efficient software delivery and updates.",
        href: ""
    }

];



const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
            <motion.div 
                initial = {{ opacity: 0}}
                animate = {{
                    opacity: 1,
                    transition : {delay: 2.4, duration: 0.4, ease: "easeIn"},
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
                {services.map((item, index) =>  {
                    return (
                        <div
                            key={index} 
                            className="flex-1 flex flex-col justify-center gap-6 group">
                            <div className="flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent 
                                group-hover:text-outline-hover transition-all duration-500">{item.num} </div>
                            <Link 
                                href={item.href}
                                className="w-[70px] h-[70px] rounded-full flex bg-white justify-center items-center
                                group-hover:bg-accent transition-all duration-500 hover:-rotate-45"
                                >
                                <BsArrowDownRight className="text-primary text-3xl"/>
                            </Link>
                                
                            </div>
                            <h2
                                className="text-[35px] font-bold text-white group-hover:text-accent leading-none
                                            transition-all duration-500"
                            >
                                
                                {item.title}</h2>
                            <p className="text-white/60">{item.description}</p>
                            <div className="border-b border-white/20 w-full"></div>
                        </div> 
                    );
                    })}
                    
            </motion.div>
            </div>
        </section>
    );
}

export default Services;