import React from 'react';
import { CSSObject } from '@emotion/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import {
  makeResponsiveObject,
  makeSpace,
  responsiveBreakpoints,
} from '../../utils/design';
import { Section } from '../../components/resume/Section';
import { Footer } from '../../components/resume/Footer';
import { ResumeProps } from '../../components/resume/model';
import { Skill } from '../../components/resume/skill/Skill';
import { Experience } from '../../components/resume/experience/Experience';
import { skills, experiences } from '../../content/resume';

const styleContainer: CSSObject = {
  display: 'grid',
  gridAutoRows: 'max-content',
  justifySelf: 'center',
  margin: 'auto',
  maxWidth: responsiveBreakpoints.tabletPortrait,
};

const styleSkills: CSSObject = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridColumnGap: makeSpace('xxl'),
  ...makeResponsiveObject({
    beginAt: 'tabletPortrait',
    style: {
      gridTemplateColumns: '1fr 1fr',
    },
  }),
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
            hashTarget: '#skills',
            text: 'Skills',
          }}
        >
          <div css={styleSkills}>
            {data.skills.map((group) => (
              <Skill key={group.title} group={group} />
            ))}
          </div>
        </Section>
        <Section
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
    data: { skills, experiences },
  },
});

export default Resume;
