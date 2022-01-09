import PROJECTS_DATA from '~/data/proyectosData';
// import FooterLink from '../common/FooterLink';
import { PageWrapper } from '../common/Layout';
import { MansoryItem } from '../common/MansoryItem';
import Tabs from '../common/Tabs';
import Cursor from '../common/Cursor';
import Footer from '../common/footer';

let arrayRandomItem = (array) => {
  return array[(Math.random() * array.length) | 0];
};

let state = ['400px', '454px', '310px'];

function Proyectos() {
  const projectsData = PROJECTS_DATA;
  return (
    <main className="Main" title="Project">
      <Cursor />
      <div className="BackLay">
        <h1 aria-hidden="true">Proyectos</h1>
      </div>
      <div className="PageSection">
        <PageWrapper>
          <h1 className="intro__text">Proyectos.</h1>
          <Tabs>
            <div className="TabItems" label="All">
              <MansoryLayout>
                {projectsData.map((item, index) => {
                  let altura = arrayRandomItem(state);

                  return (
                    <MansoryItem
                      key={index}
                      index={index}
                      item={item}
                      altura={altura}
                    />
                  );
                })}
              </MansoryLayout>
            </div>
            <div className="TabItems" label="Projects">
              <MansoryLayout>
                {projectsData.map((item, index) => {
                  let altura = arrayRandomItem(state);
                  return (
                    item.type.includes('front-end') && (
                      <MansoryItem
                        key={index}
                        index={index}
                        item={item}
                        altura={altura}
                      />
                    )
                  );
                })}
              </MansoryLayout>
            </div>
            <div className="TabItems" label="Dev Tools">
              <MansoryLayout>
                {projectsData.map((item, index) => {
                  let altura = arrayRandomItem(state);

                  return (
                    item.type.includes('back-end') && (
                      <MansoryItem
                        key={index}
                        index={index}
                        item={item}
                        altura={altura}
                      />
                    )
                  );
                })}
              </MansoryLayout>
            </div>
            <div className="TabItems" label="Open Source">
              <MansoryLayout>
                {projectsData.map((item, index) => {
                  let altura = arrayRandomItem(state);

                  return (
                    item.type.includes('cli') && (
                      <MansoryItem
                        key={index}
                        index={index}
                        item={item}
                        altura={altura}
                      />
                    )
                  );
                })}
              </MansoryLayout>
            </div>
            <div
              className="TabItems"
              label="GitHub"
              href="https://github.com/BrahyanPro"
            />
          </Tabs>
        </PageWrapper>
      </div>

      <PageWrapper>
        {/* <FooterLink goto="/resume" className="mt-3 mb-5">
          Vayamos a mi currículum.{' '}
        </FooterLink>
        <br /> */}

        <Footer />
      </PageWrapper>
    </main>
  );
}

export default Proyectos;

const MansoryLayout = ({ children }) => {
  return <div className="Layout">{children}</div>;
};
