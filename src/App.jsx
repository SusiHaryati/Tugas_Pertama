
const biodata = {
  id:1,
  nama: "Susi Haryati Hutasuhut",
	born : "13 April 2004",
	age : "20 Tahun" ,
	hobbies : ["Tidur", "makan" ,"olahraga"],
	images : "/IMG_2796.jpg"

}

function App() {


  return (
    <div className="countainer">

      <h1>Tugas 1 Kelompok Galaksi</h1>
      
      <div className="isi">
        <h1>BIODATA</h1>
        <img src={biodata.images} alt="" />
        <h3>{biodata.nama}</h3>
        <h3>{biodata.born}</h3>
        <h3>{biodata.age}</h3>

        
        {biodata.hobbies.map((hobby, index) => (
                  <div key={index} className="hoby">
                  <button>
                    {hobby}
                  </button>
                  </div>
        ))
        }
        
    </div>
    </div>

  )
}

export default App
