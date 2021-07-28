import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function YoungLivingFinalUrlComponent(props) {
  const url = props.url
  const memberId = props.memberId

  console.log(props)

  if (!url || !memberId) {
    return null;
  }

  const handleButtonClick = () => {
    const el = document.createElement('textarea');
    let valueToCopy = `${url}?sponsorid=${memberId}&enrollerid=${memberId}`
    valueToCopy = valueToCopy.replace(/\s/g, '');
    el.value = valueToCopy;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    alert("Linked copied to clipboard")
  }

  return (
      <label>
        Click to copy!
        <br />
        <button onClick={handleButtonClick}>
          {`${url}?sponsorid=${memberId}&enrollerid=${memberId}`}
        </button>
      </label>
  )
}


function App() {
  const [youngLivingUrl, setYoungLivingUrl] = useState("")
  const [memberId, setMemberId] = useState("")

  const handleYlUrlInput = (e) => {
    setYoungLivingUrl(e.target.value)
  }

  const handleMemberInput = (e) => {
    setMemberId(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>YL Link Builder</h1>
        <p>
          Paste in the young living product link, then your YL MemberID.
          <br/>
          It will auto generate a link for you
        </p>
        <form>

          <label>
            Young Living Product Link:
            <br/>
            <input type="text" name="youngliving-product-link" onChange={handleYlUrlInput} />
          </label>

          <br/>

          <label>
            Your Member/Enroller id:
            <br/>
            <input type="text" name="memberid" onChange={handleMemberInput}/>
          </label>

        </form>

        <br />

        <YoungLivingFinalUrlComponent url={youngLivingUrl} memberId={memberId} />
      </header>
    </div>
  );
}

export default App;
