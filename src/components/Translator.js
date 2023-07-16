import React, { useState } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import Typewriter from 'typewriter-effect'

function Translator(props) {

  // Covert text to speech 
  const [text, setText] = useState('');
  const {speak} = useSpeechSynthesis();

  const change = (event) =>{
    console.log('onchange occure')
    setText(event.target.value)
  }

  const handleOnClick = () =>{
    speak({text:text});
  }

  // Convert speech to text 

  const startListening = () =>{
    SpeechRecognition.startListening({continuous: true, language: 'en-IN'})
  }

  const {transcript,resetTranscript, browserSupportsSpeechRecognition} = useSpeechRecognition();

  if(!browserSupportsSpeechRecognition){
    return null
  }

  const copyText = () =>{
    navigator.clipboard.writeText(transcript);
  }
  
  const clearText = () =>{
    resetTranscript()
    
  }


  return (
    <div style={{color:props.mode==='dark'?'white':'#040050'}}>
        <div className='fw-semibold mt-5 fs-3 text'>
        <Typewriter
          options = {{
            autoStart : true,
            loop : true,
            delay : 40,
            strings : [
              "Share your problem with us",
              "You can change text to speech",
              "You can change speech to text",
            ],
          }}
        />
      </div>
        <div className=" mt-2">
         <textarea className="form-control p-3" cols="90" rows="8"  placeholder='Text message here...' onChange={change} style={{backgroundColor:props.mode==='dark'?'#160b3b':'white', color:props.mode==='dark'?'white':'black'}}>
         </textarea>
          <button  className='btn btn-secondary mx-3 my-2' onClick={handleOnClick} >Start Listening</button>
        </div>

        <div className='p-3 mt-2' style={{
                        background: '#fff',
                        boxShadow: '0 0.5rem 1rem rgba(0,0,0,.3)',
                        borderRadius: '1rem',
                        height: '200px',
                        maxWidth: '50rem',
                        backgroundColor:props.mode==='dark'?'#160b3b':'white', color:props.mode==='dark'?'white':'black'
                    }}>
         {transcript}
        </div>
        <button  className='btn btn-primary mx-3 my-2 ' onClick={copyText} >Copy Text</button>
        <button  className='btn btn-primary mx-3 my-2 ' onClick={clearText} >Clear Text</button>
        <button  className='btn btn-primary mx-3 my-2 ' onClick={startListening} >Start Listening</button>
        <button  className='btn btn-primary mx-3 my-2 ' onClick={SpeechRecognition.stopListening} >Stop Listening</button>
    </div>
  )
}

export default Translator
