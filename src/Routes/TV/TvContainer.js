import React from "react";
import TvPresenter from "./TvPresenter";
import { tvApi } from "../../api";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: airingToday }
      } = await tvApi.airingToday();
      const {
        data: { results: popular }
      } = await tvApi.popular();
      const {
        data: { results: topRated }
      } = await tvApi.topRated();

      this.setState({
        airingToday,
        popular,
        topRated
      });
    } catch {
      this.setState({
        error: "Something Wrong Tv Page."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { topRated, popular, airingToday, error, loading } = this.state;

    return <TvPresenter topRated={topRated} popular={popular} airingToday={airingToday} error={error} loading={loading} />;
  }
}
