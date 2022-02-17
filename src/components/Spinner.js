function Spinner(){
    return(
        <div className="row justify-content-center" id="loading">
            <div className="col-6 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Buscando...</span>
                </div>
                <p>Cargando...</p>
            </div>
		</div> 
    )
}
export default Spinner;