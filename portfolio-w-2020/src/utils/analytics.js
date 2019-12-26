/** @format */

const generateUtm = (source, medium, campaign, content) => {
  const linkSource =
    source && typeof source === 'string' ? source.replace(/ /g, '_') : 'portfolio_winter_2020'
  const linkedMedium = medium && typeof source === 'string' ? medium.replace(/ /g, '_') : 'website'
  const linkedCampaign =
    campaign && typeof source === 'string' ? campaign.replace(/ /g, '_') : 'winter_2020'
  const linkedContent = content && typeof content === 'string' ? content.replace(/ /g, '_') : 'link'
  return `utm_source=${linkSource}&utm_medium=${linkedMedium}&utm_campaign=${linkedCampaign}&utm_content=${linkedContent}`
}
export { generateUtm }
