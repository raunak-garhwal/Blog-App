import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {

  return (
    <Link to={`/post/${$id}`}>
        <div className='bg-black rounded-xl border border-gray-600 p-4'>
            <div className='justify-center mb-4'>
                <img
                src={appwriteService.getFilePreview(featuredImage)}
                alt={title}
                className='rounded-xl object-cover w-full h-48'/>
            </div>
            <h2 className='text-xl text-slate-200 font-mono font-semibold'>
                {title}
            </h2>
        </div>
    </Link>
  )
}

export default PostCard