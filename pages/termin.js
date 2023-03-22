import Link from 'next/link'
import React from 'react'
import Logo from '../components/common/Logo'
import Footer from '../components/Footer'

const termin = () => {
  return (
    <>
      <div className='fixed w-full h-16 flex justify-between items-center bg-white '>
        <div className='pl-4 md:pl-16'>
          <Link href='/login'>
            <Logo />
          </Link>
        </div>
      </div>
      <div className='grid lg:grid-cols-1 gap-5 mb-16 items-center'>
        <div className='bg-white rounded h-20 shadow-sm ' />
      </div>
      <div className='flex justify-center'>
        <div className='bg-white rounded h-auto shadow-sm w-3/4 '>
          <div className='flex justify-center mb-10 mt-5'>
            <h1 className='font-bold text-3xl items-center'>
              Terminos y Condiciones
            </h1>
          </div>
          <div className='mx-20'>
            <span className='text-justify'>
              {' '}
              Tigriada, S.A.P.I. de C.V., SOFOM, E.N.R. (“Confiadora”) con
              domicilio en Watteau 54, interior 102 y 103, colonia santa María
              Nonoalco, Benito Juárez, ciudad de México, 03700. (el
              “Domicilio”), en cumplimiento de lo dispuesto en la Ley Federal de
              Protección de Datos Personales en Posesión de los Particulares (la
              “Ley”), pone a su disposición su aviso de privacidad, el cual
              podrá ser consultado en todo momento en la página de internet
              www.confiadora.mx <br /> <br />
              <ul>
                <li>
                  1. Revocación del consentimiento. El titular tiene derecho a
                  revocar su consentimiento, limitar el uso o la divulgación de
                  sus datos personales, en cualquier momento, mediante solicitud
                  por escrito enviada a contacto@confiadora.mx o presentada en
                  el Domicilio de Confiadora. La solicitud debe contener:
                  <br />
                  <ol>
                    <li>  (i) el nombre y correo electrónico del titular,</li>{' '}
                    <li>(ii) copia de una identificación oficial del titular o de su
                      representante legal y, en su caso, de los documentos con los
                      que éste acredite su carácter,
                    </li>
                    <li>
                      (iii) la descripción clara y precisa del alcance de su
                      revocación o limitación, y
                    </li>
                    (iv) las demás circunstancias que faciliten la localización
                    de sus datos personales. Dentro de los 20 días hábiles
                    siguientes a la recepción de la solicitud, Confiadora dará
                    respuesta a la misma, mediante correo electrónico que será
                    enviado a la dirección señalada por el titular, en el
                    entendido que surtirá efectos y se hará efectiva dentro de
                    los 15 días hábiles siguientes. No será necesario el
                    consentimiento del titular para el tratamiento de sus datos
                    personales en los supuestos previstos en el artículo 10 de
                    la Ley.
                  </ol>
                </li>
                <br />
                <li>
                  {' '}
                  2. Datos personales recabados. Confiadora recabará del
                  titular, directa o indirectamente, a través de cualquier medio
                  permitido por la Ley, su reglamento y demás disposiciones que
                  resulten aplicables, los datos personales que considere
                  necesarios para los fines señalados en el presente aviso de
                  privacidad, incluyendo, sin limitarse a: (i) (datos de
                  identificación y contacto) nombre, domicilio, estado civil,
                  nacionalidad, fecha de nacimiento, firma, teléfono fijo y
                  celular, correo electrónico y clave del R.F.C. del titular y
                  referencias; (ii) (datos profesionales o laborales) profesión,
                  empleo u ocupación, nivel de ingresos, domicilio, teléfono y
                  correo laboral; y (iii) (datos financieros o patrimoniales)
                  patrimonio, historial crediticio, nivel de ingresos y egresos,
                  cuentas bancarias, seguros y servicios contratados, así como
                  cualquier otra información relacionada con la capacidad
                  crediticia del titular.
                </li>
                <br />
                <li>
                  {' '}
                  3. Finalidades del tratamiento. Confiadora tratará los datos
                  personales recabados, en la medida que resulte necesario,
                  adecuado y relevante para el cumplimiento de los siguientes
                  fines: (i) cumplir las políticas de identificación y
                  conocimiento de sus Clientes, así como las demás obligaciones
                  a su cargo en materia de prevención de operaciones con
                  recursos de procedencia ilícita y financiamiento de
                  actividades terroristas, analizando el perfil transaccional de
                  cada uno; (ii) celebrar operaciones y contratos con el
                  titular, y realizar los actos que estime necesarios o
                  convenientes para lograr el cumplimiento de las obligaciones
                  derivadas de dichas operaciones y contratos; (iii) directa o
                  indirectamente, promover servicios complementarios, realizar
                  encuestas, estudios de mercado y los demás análisis y reportes
                  que estime necesarios o convenientes para el cumplimiento de
                  su objeto social, ceder total o parcialmente cartera, así como
                  para la contratación de créditos y celebración de alianzas con
                  terceros; y (iv) cualquier otro compatible o análogo a los
                  anteriores.
                </li>
                <br />
                <li>
                  {' '}
                  4. Ejercicio de los derechos ARCO. El titular tiene derecho de
                  acceso, actualización, rectificación, cancelación y oposición
                  al tratamiento de sus datos personales en términos de la Ley,
                  para cuyo ejercicio deberá presentar solicitud por escrito
                  enviada a contacto@confiadora.mx o al Domicilio de Confiadora.
                  La solicitud debe contener: (i) el nombre y correo electrónico
                  del titular, (ii) copia de una identificación oficial del
                  titular o de su representante legal y, en su caso, de los
                  documentos con los que éste acredite su carácter, (iii) la
                  descripción clara y precisa del derecho que pretende ejercer y
                  los datos personales a que se refiera, (iv) cualquier otro
                  elemento o documento que facilite la localización de sus datos
                  personales, y (v) en su caso, las modificaciones a realizarse
                  y aportar la documentación que sustente su petición. Dentro de
                  los 20 días hábiles siguientes a la recepción de la solicitud,
                  Confiadora dará respuesta a la misma, mediante correo
                  electrónico que será enviado a la dirección señalada por el
                  titular, en el entendido que surtirá efectos y se hará
                  efectiva dentro de los 15 días hábiles siguientes.
                </li>
                <br />
                <li>
                  {' '}
                  5. Transferencia de datos personales. Confiadora se obliga a
                  no transferir ni divulgar, total o parcialmente, los datos
                  personales del titular, salvo cuando resulte necesario,
                  adecuado y relevante para cumplir los fines del tratamiento
                  establecidos en el presente, por lo que adoptará e
                  implementará todos los procedimientos y medidas necesarios
                  para impedir el uso o revelación no autorizada de los datos
                  personales del titular. De manera enunciativa y no limitativa,
                  Confiadora podrá transferir o divulgar los datos personales
                  del titular a sus accionistas, consejeros, apoderados,
                  comisionistas, funcionarios y empleados en general, asesores y
                  consultores externos, acreedores, socios comerciales,
                  proveedores y terceros que le presten servicios. En dicho
                  caso, el tercero receptor quedará sujeto a, y deberá cumplir
                  el presente aviso de privacidad. No será necesario el
                  consentimiento del titular para la transferencia de sus datos
                  personales en los supuestos previstos en el artículo 37 de la
                  Ley.
                </li>
                <br />
                <li>
                  {' '}
                  6. Conservación de datos personales. Confiadora conservará los
                  datos personales del titular durante un plazo de 10 años y
                  mientras no hayan prescrito las acciones que tenga o pudiera
                  tener en contra del titular, salvo la información relativa al
                  incumplimiento de obligaciones, que será eliminada de la base
                  de datos una vez transcurrido el plazo de 72 meses a partir
                  del incumplimiento.
                </li>
                <br />
                <li>
                  {' '}
                  7. Dudas y quejas. Para la atención de cualquier duda o queja
                  relativa al aviso de privacidad, Confiadora pone a su
                  disposición el correo electrónico: contacto@confiadora.mx. La
                  Dirección Comercial de Confiadora será el departamento
                  responsable de dar trámite a las solicitudes de los titulares
                  y de fomentar la protección de datos personales al interior de
                  Confiadora.
                </li>
                <br />
                <li>
                  {' '}
                  8. Cambios al aviso de privacidad. Confiadora se reserva el
                  derecho de modificar el presente aviso de privacidad, el cual
                  podrá ser ejercido en cualquier tiempo, previo aviso con al
                  menos 30 días hábiles de anticipación a través de nuestra
                  página de internet www.confiadora.mx. Fecha de última
                  modificación: 14 de mayo del 2021.{' '}
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default termin

termin.getLayout = function PageLayout (page) {
  return <>{page}</>
}
