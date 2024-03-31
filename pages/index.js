import Header from '../components/Header';
import Image from 'next/image';
import imagesData from './images.json';
import post from './posts.json';

export default function Home() {
  return (
    <div style = {{backgroundImage: 'linear-gradient(rgb(255, 255, 255), rgb(122, 122, 122))', height: '170vh'}}>
      <Header />
      <div style = {{display: 'flex'}}> 
        <div style = {{height: '15vh', width: '15vh', marginLeft: '55vh' , marginTop: '5vh' }}>
          <Image src = "https://www.nyc.gov/assets/nycha/images/content/pages/contact-in-person.png" alt="Instagram" layout = "responsive" width = {1} height = {1} style = {{borderRadius:'50%', border: '3px solid #e36dac',  padding: '4px'}} objectFit = "cover"/>
        </div>
        <div style = {{fontFamily: 'verdana', fontSize: '30px', marginLeft: '15vh', marginTop: '6vh'}}>
          <span>jordan</span> 
          <button style = {{color: 'white', backgroundColor: '#00b6ed', border: 'none' , height: '4vh' , width: '13vh' , borderRadius: "4px", marginLeft: "5vh", marginTop: "-3vh"}}>Follow</button>
          <button style = {{color: 'white', backgroundColor: '#00b6ed', border: 'none' , height: '4vh' , width: '5vh' , borderRadius: "4px", marginLeft: "2vh"}}>&#x2BC6;</button>
          <div style = {{height: '4vh', width: '4vh', marginLeft: '40vh', marginTop: '-4vh'}}>
            <Image src = "https://www.svgrepo.com/show/491050/meatballs-menu.svg" alt = "menu" layout = "responsive" width = {1} height = {1}/>
          </div>
        </div>
        <div style={{fontFamily: "verdana", marginTop: "16vh" , marginLeft: "-44vh"}}>
          <span><b>1,048</b> posts</span>
          <span style = {{marginLeft: "2vh"}}><b>13.5k</b> followers</span>
          <span style = {{marginLeft: "2vh"}}><b>22</b> following</span>
          <p style = {{marginTop: "3vh"}}><b>Jordan A.</b> Graphic designer and photographer</p>
          <p style = {{marginTop: "-1vh" , color: "#23287a" , fontSize: "14px"}}>www.defectsdesigns.com</p>
        </div>
      </div>
      <div  style = {{width:'50vw', height: '15vh', marginLeft: '50vh', display: 'flex', justifyContent: 'space-around', marginTop: '3vh'}}>
          {imagesData.map((image, index) => (
        <div key={index} style={{ height: '8vh', width: '8vh', textAlign: 'center',fontFamily: 'verdana' }}>
          <div style={{ height: '8vh', width: '8vh', position: 'relative' }}>
          <Image
            src={image.src}
            alt={image.alt}
            layout="responsive"
            width={1}
            height={1}
            style={{ borderRadius: '50%', border: '2px solid grey', padding: '3px' }}
          />
          </div>
          <p style={{ marginTop: '2vh', fontSize: '2vh', fontWeight: 'bold' }}>{image.alt}</p>
        </div>
        ))}
      </div>

      <div style={{ width: '110vh', marginLeft: '50vh', display: 'flex', flexDirection: 'column', marginTop: '6vh' }}>
          <div  style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            {post.slice(0, 3).map((post, index) => (
              <div key={index} style={{ height: '20vh', width: 'calc(33.33% - 10px)', fontFamily: 'verdana' }}>
                <Image  src={post.src} layout="responsive" width={1} height={1} style={{ borderRadius: '4px' }}/>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between',marginTop: '33vh' }}>
            {post.slice(3, 6).map((post, index) => (
              <div key={index} style={{ height: '20vh', width: 'calc(33.33% - 10px)', fontFamily: 'verdana' }}>
                <Image src={post.src} layout="responsive" width={1} height={1} style={{ borderRadius: '4px' }}/>
                <div className="overlay"></div>
              </div>
            ))}
          </div>
      </div>


    
  </div>
  );
}


{/* <div style = {{width: '110vh', marginLeft: '50vh', display: 'flex', flexWrap: 'wrap' , justifyContent: 'space-between', marginTop: '6vh'}}>
        {post.slice(0,3).map((post, index) => (
        <div key = {index} style = {{height: '20vh', width: 'calc(33.33% - 10px)', marginBottom: '10px', fontFamily: 'verdana'}}>
          <Image src = {post.src} alt = "c1" layout = "responsive" width = {1} height = {1} style = {{borderRadius: '4px'}}/>
        </div>
        ))}
    </div> */}

{/* <div style = {{height: '8vh', width: '8vh', fontFamily: 'verdana'}}>
          <Image src = "https://www.shutterstock.com/image-vector/simple-minimal-camera-icon-black-600nw-217867000.jpg" alt = "c1" layout = "responsive" width = {1} height = {1} style = {{borderRadius: '50%',   border: '2px solid grey',  padding: '3px'}}/>
          <p style = {{marginTop: '1vh', fontSize: '2vh', fontWeight: 'bold', marginLeft: '-3vh'}}>Photography</p>
        </div>
        <div style = {{height: '8vh', width: '8vh', fontFamily: 'verdana'}}>
          <Image src = "https://e7.pngegg.com/pngimages/426/640/png-clipart-computer-icons-nature-icon-design-landscape-forest-miscellaneous-leaf-thumbnail.png" alt = "c1" layout = "responsive" width = {1} height = {1} style = {{borderRadius: '50%',   border: '2px solid grey',  padding: '3px'}}/>
          <p style = {{marginTop: '1vh', fontSize: '2vh', fontWeight: 'bold', marginLeft: '1vh'}}>Nature</p>
        </div>
        <div style = {{height: '8vh', width: '8vh', fontFamily: 'verdana'}}>
          <Image src = "https://i.pinimg.com/736x/91/f0/07/91f00793e3223dee57a089f5f66cb7c7.jpg" alt = "c1" layout = "responsive" width = {1} height = {1} style = {{borderRadius: '50%',  border: '2px solid grey',  padding: '3px'}}/>
          <p style = {{marginTop: '1vh', fontSize: '2vh', fontWeight: 'bold'}}>Shopping</p>
        </div>
        <div style = {{height: '8vh', width: '8vh', fontFamily: 'verdana'}}>
          <Image src = "https://as2.ftcdn.net/v2/jpg/03/87/82/77/1000_F_387827780_mYEJbZkQcEala2kgnL7gsZwwGmZmypFa.jpg" alt = "c1" layout = "responsive" width = {1} height = {1} style = {{borderRadius: '50%',   border: '2px solid grey',  padding: '3px'}}/>
          <p style = {{marginTop: '1vh', fontSize: '2vh', fontWeight: 'bold', marginLeft: '2vh'}}>Food</p>
        </div>
        <div style = {{height: '8vh', width: '8vh', fontFamily: 'verdana'}}>
          <Image src = "https://cdn-icons-png.freepik.com/256/11499/11499703.png" alt = "c1" layout = "responsive" width = {1} height = {1} style = {{borderRadius: '50%',   border: '2px solid grey',  padding: '3px'}}/>
          <p style = {{marginTop: '1vh', fontSize: '2vh', fontWeight: 'bold', marginLeft: '1vh'}}>Travel</p>
        </div>
        <div style = {{height: '8vh', width: '8vh', fontFamily: 'verdana'}}>
          <Image src = "https://i.pinimg.com/736x/20/b1/e6/20b1e6f1921ad971c677f4ed9597e464.jpg" alt = "c1" layout = "responsive" width = {1} height = {1} style = {{borderRadius: '50%',   border: '2px solid grey',  padding: '3px'}}/>
          <p style = {{marginTop: '1vh', fontSize: '2vh', fontWeight: 'bold', marginLeft: '2vh'}}>Work</p>
        </div> */}