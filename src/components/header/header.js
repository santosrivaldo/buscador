import './header.css'

function Header() {
    return (
        <div className="Header">
            <header>
                <div class="header">
                    <div class="logo">
                        <img src="caminho_para_o_logo.png" alt="Logo" />
                    </div>
                    <div class="home-header">
                        <span>Buscador de CEP</span>
                    </div>

                    <div class="search">
                        <input type="text" placeholder="Pesquisar" />
                        <button>Pesquisar</button>
                    </div>
                </div>
            </header>


        </div>
    )
}


export default Header;
