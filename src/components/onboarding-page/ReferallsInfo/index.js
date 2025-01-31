import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './style.scss';

const ReferallsInfo = ({ t }) => {
  // TODO fetch counts from api
  const referalReward = 1000;
  const refereeReward = 200;
  const referalsPayout = 24500;

  const { referalls } = useStaticQuery(graphql`
    query ReferallsQuery {
      referalls: allAirtable(
        filter: { table: { eq: "Integrator" } }
        sort: { fields: data___IntegratorId, order: DESC }
      ) {
        nodes {
          data {
            IntegratorId
            PersonId
          }
          recordId
        }
      }
    }
  `);

  useEffect(() => {
    if (referalls && referalls.nodes) {
    }
  }, [referalls]);

  return (
    <div className="ReferallsInfo__wrapper">
      <div className="ReferallsInfo__content">
        <div className="ReferallsInfo__item">
          <div className="ReferallsInfo__item__title">{t('onboarding.page3.referallsInfo.reward')}</div>
          <div className="ReferallsInfo__item__count">
            <span className="ReferallsInfo__item__currency">$</span>
            {referalReward}
          </div>
        </div>

        <div className="ReferallsInfo__item">
          <div className="ReferallsInfo__item__title">{t('onboarding.page3.referallsInfo.refereeReward')}</div>
          <div className="ReferallsInfo__item__count">
            <span className="ReferallsInfo__item__currency">$</span>
            {refereeReward}
          </div>
        </div>

        <div className="ReferallsInfo__item">
          <div className="ReferallsInfo__item__title">{t('onboarding.page3.referallsInfo.payout')}</div>
          <div className="ReferallsInfo__item__count">
            <span className="ReferallsInfo__item__currency">$</span>
            {referalsPayout}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferallsInfo;
