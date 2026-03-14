import React from 'react';
import { CSSObject } from '@emotion/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { makeSpace, responsiveBreakpoints } from '../../utils/design';
import { Section } from '../../components/resume/Section';
import { Footer } from '../../components/resume/Footer';
import { ResumeProps } from '../../components/resume/model';
import { Experience } from '../../components/resume/experience/Experience';
import { experiences, background } from '../../content/resume';

const styleContainer: CSSObject = {
  display: 'grid',
  gridAutoRows: 'max-content',
  justifySelf: 'center',
  margin: 'auto',
  maxWidth: responsiveBreakpoints.tabletPortrait,
};

const styleBackground: CSSObject = {
  p: {
    margin: `${makeSpace('sm')} 0`,
  },
};

const Resume: NextPage<ResumeProps> = ({ data }) => {
  const { pathname, asPath } = useRouter();
  const hash = asPath.substr(asPath.lastIndexOf('#'), asPath.length);
  return (
    <Layout footer={<Footer />} seo={{ pageTitle: 'Resume' }}>
      <div css={styleContainer}>
        <Section
          defaultClosed
          headerProps={{
            hash,
            pathname,
            hashTarget: '#experience',
            text: 'Experience',
          }}
        >
          {data.experiences
            .filter((e) => e.kind === 'experience')
            .map((entry) => (
              <Experience key={entry.title} entry={entry} />
            ))}
        </Section>
        <Section
          defaultClosed
          headerProps={{
            hash,
            pathname,
            hashTarget: '#background',
            text: 'Background',
          }}
        >
          <div css={styleBackground}>
            {data.background.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Section>
        <Section
          defaultClosed
          headerProps={{
            hash,
            pathname,
            hashTarget: '#education',
            text: 'Education',
          }}
        >
          {data.experiences
            .filter((e) => e.kind === 'education')
            .map((entry) => (
              <Experience key={entry.title} entry={entry} />
            ))}
        </Section>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => ({
  props: {
    data: { experiences, background },
  },
});

export default Resume;
