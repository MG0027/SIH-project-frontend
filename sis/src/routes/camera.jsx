import React, { useState, useRef, useEffect } from 'react';

const CameraPanel = () => {
  const [cameraOpened, setCameraOpened] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [leafType, setLeafType] = useState(null);
  const [diseaseResult, setDiseaseResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  useEffect(() => {
    document.body.className = 'camera-background';
    return () => {
      document.body.className = ''; 
    };
  }, []);

  useEffect(() => {
    console.log("Video ref on render:", videoRef.current);
    if (cameraOpened) {
      startCamera();
    }
  }, [cameraOpened]);

  const startCamera = () => {
    setTimeout(() => {
      if (videoRef.current) {
        console.log("Starting camera...");
        navigator.mediaDevices.getUserMedia({ video: true })
          .then((stream) => {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
            console.log("Camera started successfully");
          })
          .catch((err) => {
            console.error("Error accessing camera: ", err);
          });
      } else {
        console.error("Video element is not available after attempting to start camera.");
      }
    }, 300); 
  };

  const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/png');
    setCapturedImage(dataUrl);
    processImage(dataUrl);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result);
        processImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = (imageData) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLeafType("Banana Plant");
      setDiseaseResult({
        disease: "Sigatoka leaf spot",
        confidence: 79.56
      });
    }, 2000);
  };

  const resetData = () => {
    setCapturedImage(null);
    setLeafType(null);
    setDiseaseResult(null);
    setCameraOpened(false);
  };

  return (<>
    <div style={{ padding: '10px', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Leaf and Disease Detection</h2>

      {!capturedImage && (
        <div>
          {!cameraOpened ? (
            <div>
              <button onClick={() => setCameraOpened(true)} style={{ marginRight: '40px' ,marginTop: '40px', paddingLeft:'5px',paddingRight:'5px', backgroundColor: '#557151',
    border: 'none',
    
    
    padding: '6px 12px',
    borderRadius: '40px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#E6E5A3',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease'}}>
                Open Camera
              </button>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                ref={fileInputRef} 
                style={{ display: 'none' }} 
              />
              <button onClick={() => fileInputRef.current.click()} style={{paddingLeft:'5px',paddingRight:'5px', backgroundColor: '#557151',
    border: 'none',
    
   
    padding: '6px 12px',
    borderRadius: '40px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#E6E5A3',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease'}}>
                Upload Image
              </button>
            </div>
          ) : (
            <div>
              <video ref={videoRef} style={{ width: '100%', marginBottom: '10px', maxHeight: '400px', 
    objectFit: 'cover'   }} />
              <button onClick={captureImage}style={{ paddingLeft:'5px',paddingRight:'5px', border: '2px solid black',borderRadius: '40px', backgroundColor: '#557151',
    border: 'none',
    
    
    padding: '6px 12px',
    borderRadius: '40px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#E6E5A3',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease'}}>
                Capture Image
              </button>
            </div>
          )}
        </div>
      )}

      <canvas ref={canvasRef} style={{ display: 'none' }} width={320} height={240}></canvas>

      {capturedImage && (
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          <img 
            src={capturedImage} 
            alt="Captured Leaf" 
            style={{ maxWidth: '50%', height: 'auto', marginRight: '20px' }} 
          />
          <div style={{ flex: 1, textAlign: 'left' }}>
            {loading ? (
              <p>Processing image...</p>
            ) : (
              <>
                {leafType && (
                  <div style={{ marginBottom: '10px' }}>
                    <h3>Leaf Type:</h3>
                    <p><strong>{leafType}</strong></p>
                  </div>
                )}
                {diseaseResult && (
                  <div>
                    <h3>Disease Detection Result:</h3>
                    <p>{diseaseResult.disease}</p>
                    <p>Confidence: {diseaseResult.confidence}%</p>
                  </div>
                )}
              </>
            )}
            <button onClick={resetData} style={{ marginTop: '10px', paddingLeft:'5px',paddingRight:'5px',backgroundColor: '#557151',
    border: 'none',
    
    
    padding: '6px 12px',
    borderRadius: '40px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#E6E5A3',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease' }}>
              Reset
            </button>
          </div>
        </div>
      )}
    </div></>
  );
};

export default CameraPanel;
