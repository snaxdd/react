import React from "react";
import {ReactComponent as IconFavWhite} from "../../assets/icons/Fav.svg";
import {ReactComponent as IconPrintWhite} from "../../assets/icons/PrintWhite.svg";
import {ReactComponent as IconShareWhite} from "../../assets/icons/ShareWhite.svg";

export class UserActionIcons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="promo-slider_user-actions">

        <a href={this.props.href} className="promo-slider_user-actions-link">
          <IconFavWhite
            className="promo-slider_user-actions-svg promo-slider_user-actions-svg"/>
        </a>

        <a href={this.props.href} className="promo-slider_user-actions-link">
          <IconPrintWhite className="promo-slider_user-actions-svg"/>
        </a>

        <a href={this.props.href} className="promo-slider_user-actions-link">
          <IconShareWhite className="promo-slider_user-actions-svg"/>
        </a>

      </div>
    );
  };
};