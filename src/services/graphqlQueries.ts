import { gql } from "@apollo/client";

export const getAllnews = gql`
                        query Query {
                        
                          allNews {
                            _id
                            coordinates
                            keywords
                            link
                            matchTo
                            rating
                            snippet
                            source
                            time
                            body
                            literalLocation
                          }
                        }`

export const newOrUpdatedNews = gql`
subscription Subscription {
  newOrUpdatedNews {
    _id
    body
    coordinates
    keywords
    link
    literalLocation
    matchTo
    rating
    snippet
    source
    time
  }
}`