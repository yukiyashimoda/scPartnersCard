import request,{gql} from "graphql-request";

export const getPartnersList = async() => {
  const query=gql`
  query PartnerList {
    partnerLists(first: 100){
      categoryDropDown2
      recommend
      createdAt
      id
      companyName
      shopName
      introduction
      terms
      benefit
      terms2
      benefit2
      notice
      postNumber
      address
      telNumber
      googleMap
      businessTime
      holiday
      publishedAt
      updatedAt
      webSite
      image {
        url
      }
  }
  }
  `

  const result=await request('https://api-ap-northeast-1.hygraph.com/v2/clrjetogk04f001w5nmaj5bwr/master',query);
  return result;
}