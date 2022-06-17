import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Find CSS Themes',
    Svg: require('@site/static/img/css-3.svg').default,
    description: (
      <>
        Search and find the theme that will make your slides awesome!
      </>
    ),
  },
  {
    title: 'Add to VS CODE',
    Svg: require('@site/static/img/visual-studio-code.svg').default,
    description: (
      <>
        Add the CSS theme in your VS Code configuration (or for the CLI) and play with it!
      </>
    ),
  },
  {
    title: 'Export your slides',
    Svg: require('@site/static/img/html-5.svg').default,
    description: (
      <>
        Make your exports with style in the format of your choice: html, pdf etc ...
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
