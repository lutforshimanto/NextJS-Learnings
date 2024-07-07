import React from 'react'

export default function page({params}:{
    params: {
        postid: string,
        commentid: string
    }
}) {
  return (
    <div>Comment of {params.commentid} for the blog post {params.postid}</div>
  )
}
