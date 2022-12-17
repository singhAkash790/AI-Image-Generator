import  { useEffect , useState}  from "react";
// import axios, { Axios } from 'axios';
import {Configuration, OpenAIApi} from "openai"

const configuration = new Configuration({
  apiKey:"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",
});
const openai = new OpenAIApi(configuration);



function App() {
  const [userPrompt, setUserPrompt] = useState("");
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState("256x256");
  const [imageUrl, setImageUrl] = useState("");

  const generateImage = async (req, res) => {
     const imageParamerter ={
      prompt: userPrompt,
      n:1,
      size:size,
     }
    try {
      const response = await openai.createImage(imageParamerter);
      const urlData = response.data.data[0].url;
      setImageUrl(urlData);

      console.log(imageUrl);  
    }
    catch(error){
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  };



//   const [title, setTitle] = useState([]);
//   const [size, setSize] = useState([]);
//   const [finalData, setFinalData] = useState('')

//  const postData =(e) => {
//   e.preventDefault();
//   axios.post(,{
//     title: prompt,
//     size,
//   }).then(res => console.log("posting data",res)).catch(error  => console.log(error))
//  }; 
//  console.log(postData);
//  const [data, setData] = useState();

  // useEffect(() => {
  //   const fetchAuthData = async () => {
  //     const result = await axios('http://localhost:5000/auth');

  //     setData(result.data); // true/false OR { message: "Authorised" }
  //   };

  //   fetchAuthData();
  // }, []);


 



  

   

  return (
  <>
  <div className="flex justify-center items-center flex-col h-screen bg-blue-400 p-10 ">
  <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
   <div className=" bg-white bg-opacity-10 px-20 py-10 gap-3 content-center items-center flex flex-col rounded-2xl  shadow-2xl shadow-blue-900 drop-shadow-2xl ">
       <div className=" border-black border-8 m-3">
           {imageUrl && <img src={imageUrl}/>}
        </div>     
      <p className=" font-serif text-center ">Description of Image</p>
      <input className="border-black border-2 rounded-lg" type="text"  onChange={(e)=> setUserPrompt(e.target.value)} />
      
      <p className="">Size of image</p>
      <input type="text" className="border-black border-2 rounded-lg" onChange={(e) => setSize(e.target.value)} />
      <button type="button" onClick={generateImage} class="text-white font-extrabold rounded-lg animate-bounce hover:scale-110 bg-blue-600 hover:bg-blue-800 px-5 py-2 m-2 uppercase">Generate</button>
      <div className="">
       </div>
    </div>
  </div>
  </>

   
  );
} 

export default App;
