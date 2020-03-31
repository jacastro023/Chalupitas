import React from "react";

var style = {
    backgroundColor: "black",
    color:"white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
}

function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                <footer class="page-footer font-small blue">
                    <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> Jose Castro</a>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer;