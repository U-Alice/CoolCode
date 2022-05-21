function Images() {
const imageClicked = (e)=>{
    window.alert(`${e.target.alt} was added to favorite images`)
     let newImage = document.createElement("img");
      newImage.setAttribute("src", e.target.src);
      document.getElementById("favorites").appendChild(newImage);
      console.log("image clicked");
    ;
}
  return (<div>
    <div id="images">
        <p className="text--">Choose your favorite Image</p>
        <div className="h-screen">
        <div className="grid grid-rows-4 grid-cols-3 gap-4">
      <img src="https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=" alt="image1" className="image h-3/4" onClick={imageClicked}/>
      <img src="https://images.unsplash.com/photo-1489674267075-cee793167910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2ludGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="image2" className="image h-3/4" onClick={imageClicked}/>
      <img src="https://images.unsplash.com/photo-1586685984116-94cca153e792?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="image3" className="image h-3/4" onClick={imageClicked}/>
      <img src="https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=" alt="image4" className="image h-3/4" onClick={imageClicked}/>
      <img src="https://images.unsplash.com/photo-1612821394773-23f0a7d33ede?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9yZXN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image5" className="image h-3/4" onClick={imageClicked}/>
      <img src="https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image6" className="image h-3/4" onClick={imageClicked}/>
    </div>
    </div>
      <h1>Favorite images</h1>
    <div id="favorites" className="grid grid-rows-4 grid-cols-3 gap-4 h-1/2">
    </div>
  </div>
  </div>
  );
}
export default Images;
