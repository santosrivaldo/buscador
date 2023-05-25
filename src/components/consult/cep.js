import './cep.css'
function Cep() {
    return (
        <div className="Cep">
            <div class="cep-consulta">
                
                   
                    <form>
                        <input name="name" autocomplete="off" required />
                        <label for="name">
                            <span>CEP</span>
                        </label>
                    </form>
                    <div id="result"></div>
                
            </div>

        </div>
    )
}


export default Cep;