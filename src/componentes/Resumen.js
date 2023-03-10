import React from "react";
import Bienvenida from "./Bienvenida";
import { useContext } from "react";
import { DataContext } from "./Dataprovider";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import ReactWhatsapp from "react-whatsapp";

export const Resumen = () => {
  const value = useContext(DataContext);
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;

  return (
    <div>
      <Bienvenida titulo="RESUMEN DE LA COMPRA" />

      <div className="carritos">
        <div className="carrito">
          {carrito.length === 0 ? (
            <h2>Tu Carrito Está Vacío</h2>
          ) : (
            <>
              <div className="sec-descr-gen-carro-res">
                <div className="sec-descr-res">
                  {carrito.map((producto) => (
                    <>
                      <div className="cont-prod-res" key={producto.id}>
                        <div className="res-items">
                          <div>
                            <p className="cantidad">
                              {producto.cantidad} Und.{" "}
                            </p>
                          </div>
                          <div>
                            <h2 className="nom-prod">. {producto.title}</h2>
                          </div>
                          <div>
                            <p>
                              . COP {producto.price * producto.cantidad}.000
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                  <h3 className="total">Total: ${total}.000 COP</h3>

                  <div className="cont-prod-res">
                    <ReactWhatsapp
                      number="+57-316-406-6946"
                      message={`Hola, revisé tu página web y me interesan estos productos: ${carrito.map(
                        (producto) =>
                          producto.cantidad + "  " +
                          producto.title + "  " +
                          "A " + 
                          producto.price * producto.cantidad + 
                          ".000" + " COP " + ",  " 
                      )} + por un valor Total de +${total}.000  COP`}
                    >
                      <div >
                        <Link to="/Resumen" className="btn-wa">
                          ENVIAR PEDIDO VÍA WhatsApp...<BsWhatsapp className="ico-wa-res"></BsWhatsapp>
                        </Link>
                      </div>
                    </ReactWhatsapp>
                  </div>
                </div>
              </div>

              <p className="entrega">
                El tiempo de entrega depende de la cantidad de piezas
                solicitadas y las características específicas de cada producto,
                variando entre 15 y 30 días
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
