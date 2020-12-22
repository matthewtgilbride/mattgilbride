import React from 'react';
import { CSSObject } from '@emotion/core';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import {
  makeResponsiveObject,
  makeSpace,
  responsiveBreakpoints,
} from '../../utils/design';
import { Section } from '../../components/resume/Section';
import { Footer } from '../../components/resume/Footer';
import { client } from '../../prismic';
import {
  ExperienceSlice,
  ResumeProps,
  SkillSlice,
} from '../../components/resume/model';
import { Skill } from '../../components/resume/skill/Skill';
import { Experience } from '../../components/resume/experience/Experience';

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
    <Layout footer={<Footer />}>
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
            {data.body
              .filter((i) => i.slice_type === 'skill_group')
              .map((slice) => (
                <Skill
                  key={JSON.stringify(slice)}
                  slice={slice as SkillSlice}
                />
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
          {data.body
            .filter(
              (i) =>
                i.slice_type === 'experience_group' &&
                i.primary.type === 'experience',
            )
            .map((slice) => (
              <Experience
                key={JSON.stringify(slice)}
                slice={slice as ExperienceSlice}
              />
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
          {data.body
            .filter(
              (i) =>
                i.slice_type === 'experience_group' &&
                i.primary.type === 'education',
            )
            .map((slice) => (
              <Experience
                key={JSON.stringify(slice)}
                slice={slice as ExperienceSlice}
              />
            ))}
        </Section>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const doc = await client.getSingle('resume', {});
  return {
    props: {
      data: doc.data,
    },
  };
};

export default Resume;
