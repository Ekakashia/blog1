import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import ReactQuill from "react-quill";


function Detalebi () {

   const [data, setData] = useState ({});

   const { id } = useParams();

   const navigate = useNavigate();

   const [editTitle, setEditTitle] = useState("");

   const [editDescription, setEditDescription] = useState("");

   const [editMode, setEditMode] = useState(false);

   const [comment, setComment] = useState("");

   const [commentDescription, setCommentDescription] = useState([]);

   

   useEffect(function() {
 
     axios.get("https://apitest.reachstar.io/blog/get/" + id).then(function (response) {
      setData(response.data);
     }).catch(function (error) {
      console.log(error);
     });

   }, []);
   const deleteblog = () => {
      axios.delete(`https://apitest.reachstar.io/blog/delete/${id}`).then(function (response){
         console.log("delete successfull", response.data)
         navigate("/main");
      }).catch(function(error){
         console.log("delete error", error);
      });
   };
   const edit = () => {
      axios.put(`https://apitest.reachstar.io/blog/edit/${id}`, {
          title: editTitle,
          description: editDescription,
        })
        .then(function (response) {
          console.log("Edit successfull", response.data);
          setData(response.data);
          navigate("/main");
       }) .catch(function (error) {
          console.log("Edit error:", error);
        });
    };
    const postComment = () => {
      axios.post(`https://apitest.reachstar.io/comment/add/${id}`,{
         comment: comment,
       })
       .then(function (response) {
         window.alert("comment successfull", response.data);
         navigate("/main");
      }) .catch(function (error) {
         console.log("comment error:", error);
      });
    };
    const deleteComment = (commentId) => {
      axios.delete(`https://apitest.reachstar.io/comment/delete/${commentId}`)
       .then(function (response) {
         console.log("comment deleted", response.data);
         window.location.reload();
      }) .catch(function (error) {
         console.log("comment delete error:", error);
      });
    };
    useEffect(() => {
 
      axios.get(`https://apitest.reachstar.io/blog/list`).then((response) => {
       setCommentDescription(response.data)
      }).catch(function (error) {
       console.log(error);
      });
    }, []);

    const findComment = commentDescription.find((news) => {
      return id === news.id.toString()
    });

    return(
    <React.Fragment>
      <Navbar></Navbar>
      <div className="container mt-5 pt-5">
         <div className="row mt-5 justify-content-center">
            <div className="col-6">
                <div className="card">
                     <div className="card-header">
                        <h1 className="card-title"> {data.title} </h1>
                     </div>
                     <div className="card-body w-100">
                        {editMode ? (
                           <ReactQuill theme="snow" value={editTitle} onChange={setEditTitle} />
                        ): (
                           <p dangerouslySetInnerHTML={{ __html: data.title}}></p>
                        )

                        }
                         {editMode ? (
                           <ReactQuill theme="snow" value={editDescription} onChange={setEditDescription} />
                        ): (
                           <p dangerouslySetInnerHTML={{ __html: data.description}}></p>
                        )

                        }
                     </div>
                     
                     <div>
                        {/* aq gvakvs dasmatebeli editirebis blogi */}
                     <div className="w-100 btn-group mt-3" role="group" aria-label="Basic example">
                     {editMode ? (
                           <button type="button" className="btn btn-success" onClick={edit}>შენახვა</button>
                        )
                          : (
                           <button type="button" className="btn btn-primary" onClick={() => setEditMode(true)}> რედაქტირება</button>
                          )
                        }
                       <button type="button" className="btn btn-danger ms-3" onClick={deleteblog}> წაშლა </button>

                     </div>
                     </div>
                    
                     <div className="card-footer">
                        <div className="row">
                           <div className="col-12">
                              <div className="commentdiv w-100 mt-5">
                              <ReactQuill theme="snow" value={comment} onChange={setComment} />
                              <button className="btn btn-success mt-5" onClick={postComment}>კომენტარის დამატება</button>
                              </div>
                              <div className="w-100 mt-5">
                                 <p>კომენტარები</p>
                                 {
                                    findComment && findComment.comments && (
                                       <div className="w-100 mt-5">
                                    {
                                       findComment.comments.map((comment) => (
                                       <div className="pt-5" key={comment.comment_id}>
                                       <a  className="userId" dangerouslySetInnerHTML={{ __html: comment.user_id}} />
                                       <div className="mt-3 postion-relative" style={{border: "solid 1px #333333" }}>
                                       <p className="pt-1"dangerouslySetInnerHTML={{ __html: comment.comment }} />
                                       <button className="btn btn-danger mt-5" onClick={() => deleteComment(comment.id)}>კომენტარის წაშლა</button>
                                       </div>
                                     </div>
                                       )) }
                                        </div>
                                    )}
                              </div>
                              </div>
                           </div>
                        </div>
                      
                     </div>
                  </div>
            </div>
         </div>
   
    </React.Fragment>

   )
}

export default Detalebi;




