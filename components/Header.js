import Image from 'next/image';


const Header = () =>{
    return (
            <div style = {{ display:'flex'}}>
                <div style = {{width: '5vh' , height: '5vh' , marginLeft: '50vh' , marginTop: '1vh'}}> 
                    <Image src = "https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais" alt="Instagram" layout = "responsive" width = {10} height = {10} style={{borderRadius: '50%'}} objectFit = "contain" />
                </div>
                <div style = {{marginLeft: '2vh' , marginTop: '2.2vh'}}>
                    <Image src = "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram logo" layout = "responsive" width = {100} height = {100} objectFit = "contain" />
                </div>
                <div style = {{marginLeft: '20vh', marginTop: '1.5vh'}}>
                    <input type="text" placeholder="Search" style = {{borderRadius: '6px' , height: '3vh' , width: '17vw' , borderColor: 'pink'}} />
                </div>
                <div style = {{width: '3vh' , height: '3vh' , marginLeft: '40vh' , marginTop: '2vh'}}> 
                    <Image src = "https://marketplace.canva.cn/m3yY0/MAEwoTm3yY0/1/tl/canva-MAEwoTm3yY0.png" alt="Instagram" layout = "responsive" width = {10} height = {10} objectFit = "contain" />
                </div>
                <div style = {{width: '3vh' , height: '3vh' , marginLeft: '3vh' , marginTop: '2vh'}}> 
                    <Image src = "https://cdn-icons-png.freepik.com/256/1077/1077035.png" alt="Instagram" layout = "responsive" width = {10} height = {10} objectFit = "contain" />
                </div>
                <div style = {{width: '5.2vh' , height: '5vh' , marginLeft: '2vh' , marginTop: '1.8vh'}}> 
                    <Image src = "https://www.creativefabrica.com/wp-content/uploads/2023/05/20/User-icon-Graphics-70077892-1-580x387.jpg" alt="Instagram" layout = "responsive" width = {10} height = {10} objectFit = "contain" />
                </div>
            </div>
    )
}

export default Header

