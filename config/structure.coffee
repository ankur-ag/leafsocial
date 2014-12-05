# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Index"
      id: "feed"
      location: "example#feed" # Supersonic module#view type navigation
    }
    {
      title: "Status"
      id: "status"
      location: "example#status"
    }
    {
      title: "User"
      id: "user"
      location: "user#index"
    }
  ]

  rootView:
     location: "user#index"

  preloads: [
    {
      id: "feed"
      location: "example#feed"
    }
    {
      id: "user"
      location: "user#index"
    }
  ]

  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "example#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  # initialView:
  #   id: "initialView"
  #   location: "example#initial-view"
