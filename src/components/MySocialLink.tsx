import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'
import { BsGithub, BsLinkedin, BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";

const MySocialLink = () => {
    const {darkMode} = useSelector((state: RootState) => state.darkMode)
    return (
        <>
        <p className='mt-16 text-center'>feel free to visit my social media</p>
        <div className="mb-4 flex justify-center flex-row lg:mb-0">
            <a
            href="https://github.com/Bung-Adi"
            className="group rounded-lg border border-transparent px-2 py-2 mx-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="mb-0 transition-transform group-hover:scale-125 motion-reduce:transform-none">
                <BsGithub color={`${darkMode ? 'white' : 'black'}`}/>
            </div>
            </a>

            <a
            href="https://www.linkedin.com/in/muhammad-aziz-abdillah-8980b41a0/"
            className="group rounded-lg border border-transparent px-2 py-2 mx-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="mb-0 transition-transform group-hover:scale-125 motion-reduce:transform-none">
                <BsLinkedin color={`${darkMode ? 'white' : 'black'}`}/>
            </div>
            </a>

            <a
            href="https://twitter.com/bungadi26"
            className="group rounded-lg border border-transparent px-2 py-2 mx-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="mb-0 transition-transform group-hover:scale-125 motion-reduce:transform-none">
                <BsTwitter color={`${darkMode ? 'white' : 'black'}`}/>
            </div>
            </a>

            <a
            href="https://www.facebook.com/am.19000/"
            className="group rounded-lg border border-transparent px-2 py-2 mx-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="mb-0 transition-transform group-hover:scale-125 motion-reduce:transform-none">
                <BsFacebook color={`${darkMode ? 'white' : 'black'}`}/>
            </div>
            </a>

            <a
            href="https://www.instagram.com/adi26r/"
            className="group rounded-lg border border-transparent px-2 py-2 mx-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="mb-0 transition-transform group-hover:scale-125 motion-reduce:transform-none">
                <BsInstagram color={`${darkMode ? 'white' : 'black'}`}/>
            </div>
            </a>
        </div>
        </>
    )
}

export default MySocialLink