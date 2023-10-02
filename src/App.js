import "./App.css";
import foto from "./foto.jpg";

function App() {
  return (
    <div className="container-full">
      <div className="atas">
        <div className="bagian-kiri">
          <div className="foto-profile">
            <img src={foto} className="foto-atur" alt="foto" />
          </div>
        </div>

        <div className="bagian-kanan">
          <div className="nama">
            <h1>Hendra Oktarizal Couwandy</h1>
          </div>
        </div>
      </div>

      <div className="tengah">
        <div className="tengah-kiri">
          <h2 style={{ marginLeft: "2%" }}>Informasi Pribadi</h2>
          <p className="stylep">Laki-laki</p>
          <p className="stylep">Mahasiswa</p>
        </div>

        <div className="tengah-kanan">
          <p className="stylep">Gen 1</p>
          <p className="stylep">Informatika</p>
          <p className="stylep">Family Business</p>
          <p className="stylep">Main Game</p>
        </div>
      </div>
      <div className="bawah">
        <h2 style={{ marginLeft: "2%" }}>Riwayat Organisasi</h2>
        <p className="stylep">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          quam tellus. Sed ligula sem, sodales viverra risus rhoncus, vulputate
          efficitur orci. Nullam feugiat vel ex vel imperdiet. Curabitur in leo
          sem. Duis sagittis dui sed arcu eleifend, ut varius nulla vestibulum.
          Mauris consequat facilisis dui. Vivamus venenatis eros vitae dui
          laoreet bibendum. Donec rhoncus, neque eu hendrerit rhoncus, enim
          turpis fermentum lorem, et feugiat neque lacus ut risus. Integer ipsum
          lacus, rutrum ac egestas ac, lacinia a mi. Vivamus bibendum est sem,
          quis finibus mauris vestibulum vitae. Vivamus pellentesque vel turpis
          sit amet suscipit. Morbi fringilla consequat convallis.
        </p>
      </div>
    </div>
  );
}

export default App;
