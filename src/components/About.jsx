
import React from "react";
import web from '../img/c1.jpg'
import Howitworks from './Howitworks'

function About() {
  return (
    <>

      <div className="container text-center">

        <div className="row">
          <div className="col-md-8">
            <div className="title">
              <h2 className="titleText">Our <span>E</span>xperiences</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque consectetur dolores totam quis,
                alias temporibus in est aspernatur dolore? Ut eligendi harum alias doloremque asperiores ullam
                quibusdam, sapiente nobis ex, ea, corporis obcaecati beatae dolor enim hic soluta. Animi odio
                architecto sit veritatis autem explicabo quis officia porro facere laudantium earum sapiente
                eligendi numquam harum enim, in aut saepe quaerat sed cumque doloribus voluptate consequatur.
                Beatae consequatur nobis illo at. Magnam quia iste inventore veritatis, qui facilis repellat
                itaque vel ex fugit ea doloremque corrupti eius saepe exercitationem modi porro est quod ad
                minus dolores dolorum eos. Quos delectus ipsa reiciendis, velit nihil illo laudantium! Magnam
                assumenda doloribus sit porro neque omnis alias. Tempore, ab. Blanditiis illo magni nobis
                commodi, iusto porro consequatur assumenda, nostrum non ullam quisquam hic repudiandae
                excepturi, facilis quod dolorem perferendis. Amet aperiam placeat autem alias libero similique,
                ullam fugit delectus reiciendis quae quaerat vero maxime corporis eum voluptas labore dicta
                illum animi eius voluptatibus suscipit cum laudantium. Expedita corporis accusamus illum rem,
                est beatae sapiente, tenetur itaque nam blanditiis tempore magni ratione dicta dolores quis
                debitis eaque dolorem. Blanditiis sint quam, laboriosam voluptates voluptatum adipisci cumque
                ratione odio a tenetur rerum distinctio et illum molestias? </p>
            </div>
          </div>
          <div className="iim col-6 col-md-4">
            <img src={web} className="img-fluid aimg" alt="..." />
          </div>
        </div>


      </div>
      <Howitworks />












    </>
  );
}

export default About;
