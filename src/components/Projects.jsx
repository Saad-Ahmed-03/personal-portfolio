import React from 'react';
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap';

export default function Projects() {
  const projectData = {
    webDevelopment: [
      {
        title: 'Mirha Fasion',
        description: 'Elegant Women’s Premium Quality Wedding Dresses',
        techStack: 'Shopify, Liquid, Html, CSS, Javascript',
        deployment: 'Deployed on Shopify',
        link: 'https://www.mirhafashion.com/',
        linkLabel: 'View Website',
      },
      {
        title: 'Markhor Wear',
        description: 'Elegant Men & Women’s Premium Quality Jackets',
        techStack: 'WordPress, Avada Theme, CSS',
        deployment: 'Deployed on WordPress',
        link: 'https://markhoroutwear.com/',
        linkLabel: 'View Website',
      },
      {
        title: 'RhineStone Belt Store',
        description: 'Elegant Men & Women’s Premium Quality Belts & Jeans',
        techStack: 'Shopify, Liquid, CSS, JavaScript',
        deployment: 'Deployed on Shopify',
        link: 'https://rhinestonebeltstore.com/',
        linkLabel: 'View Website',
      },
      {
        title: 'Printer Worlds',
        description: 'Printers',
        techStack: 'Shopify, Liquid, CSS, JavaScript',
        deployment: 'Deployed on Shopify',
        link: 'https://printerworlds.com/',
        linkLabel: 'View Website',
      },
      {
        title: 'Ink Cartridge Supply',
        description: 'Ink Cartridges of Differetn Types',
        techStack: 'Shopify, Liquid, CSS, JavaScript',
        deployment: 'Deployed on Shopify',
        link: 'https://inkcartridgesupply.com/',
        linkLabel: 'View Website',
      },
      {
        title: 'Get Grate',
        description: 'premium Design of Caps',
        techStack: 'Shopify, Liquid, CSS, JavaScript',
        deployment: 'Deployed on Shopify',
        link: 'https://getgrate.com/',
        linkLabel: 'View Website',
      },
    ],
    appDevelopment: [
      {
        title: 'Carousel Reels',
        description: 'Showcase TikTok videos on your Shopify store to attract customers, boost engagement, and enhance aesthetics.',
        techStack: 'Remix.js, React.js, MongoDB, Shopify, Liquid, CSS, JavaScript, Github, Vercel',
        deployment: 'Deployed on Vercel',
        link: 'https://apps.shopify.com/carousel-reels',
        linkLabel: 'View App',
      },
      {
        title: 'Angie Lobster',
        description: 'Private Shopify App managing the filtaration of Warehouses or Locaiton based Order, Product Summary, Print Receipt',
        techStack: 'Remix.js, React.js, MongoDB, Shopify, Liquid, CSS, JavaScript, Github, Vercel',
        deployment: 'Deployed on Vercel',
        link: 'https://shop.angieslobster.com/',
        linkLabel: 'View Website',
      },
    ],
    pyhtonscript: [
      {
        title: 'Product Retrieving, Uploading, Updation, Deletion',
        description: "Create a python script to retrieve, upload, update or delete the products through external API's (Open API's) or Shopify API's",
        techStack: 'Python on Google Collab',
      },
      {
        title: 'Order Retrieving, Uploading, Updation, Deletion',
        description: "Create a python script to retrieve, upload, update or delete the orders through Shopify API's",
        techStack: 'Python on Google Collab',
      },
      {
        title: 'Srcaping the Reviews of the Product & Upload on Shopify',
        description: "Create a python script to retrieve the product reviews from any site with the help of Selenium or Scraper API's",
        techStack: 'Python on Google Collab',
      },
    ],
  };

  const renderProjects = (projects) =>
    projects.map((project, index) => (
      <Col lg={4} key={index} className="mb-4">
        <div className="project-item text-start">
          <h3>{project.title}</h3>
          <h4>{project.description}</h4>
          <p className="mb-0"><strong>Tech Stack:</strong> {project.techStack}</p>
          <p><strong>{project.deployment}</strong></p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.linkLabel}
          </a>
        </div>
      </Col>
    ));

  return (
    <Container>
      <div className="title-header text-start">
        <h2 className="fs-70">Projects</h2>
      </div>
      <Row>
        <Col lg={12}>
          <Tab.Container defaultActiveKey="webDevelopment">
            <Nav variant="tabs" className="justify-content-center">
              <Nav.Item>
                <Nav.Link eventKey="webDevelopment">Web Development</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="appDevelopment">App Development</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="pyhtonscript">Python Sripting</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="mt-4">
              <Tab.Pane eventKey="webDevelopment">
                <Row>{renderProjects(projectData.webDevelopment)}</Row>
              </Tab.Pane>
              <Tab.Pane eventKey="appDevelopment">
                <Row>{renderProjects(projectData.appDevelopment)}</Row>
              </Tab.Pane>
              <Tab.Pane eventKey="pyhtonscript">
                <Row>{renderProjects(projectData.pyhtonscript)}</Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}
