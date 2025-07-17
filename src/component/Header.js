function Header(){
    return(
        <div className="HD_wrap">
            <h2>오늘은 <i className="fa fa-calendar" style={{fontSize: "24px"}}></i></h2>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
}
export default Header;