module StyleSheet exposing (..)

import Style exposing (StyleSheet, style)
import Style.Color as Color
import Style.Border as Border
import Style.Font as Font
import Style.Scale as Scale
import Style.Shadow as Shadow
import Color exposing (Color)


type Style
    = None
    | Main
    | Sidebar
    | SelectorItem
    | Header
    | Nav
    | NavLink
    | Badge
    | Hairline
    | DeleteButton
    | NewButton
    | Dropdown
    | DropdownItem


type Variation
    = Selected
    | NavMenu
    | Title


styleSheet : StyleSheet Style Variation
styleSheet =
    Style.styleSheet
        [ Style.style None
            []
        , Style.style Main
            [ Font.typeface
                [ Font.font "Gill Sans"
                , Font.font "Trebuchet MS"
                , Font.font "helvetica"
                , Font.font "sans-serif"
                ]
            , Font.light
              --weight "lighter"
            , Color.text Color.lightCharcoal
            , Style.cursor "default"
            , Style.focus []
            ]
        , Style.style Sidebar
            [ Color.background Color.lightGrey
            , Border.right 0.5
            , Color.border Color.grey
            , Shadow.box
                { offset = ( 10, 0 )
                , blur = 30
                , size = -25
                , color = Color.black
                }
            ]
        , Style.style SelectorItem
            [ Color.background Color.lightGrey
            , Style.hover [ Color.background Color.grey ]
            , Style.variation Selected
                [ Color.background <| Color.greyscale 0.7
                , Style.hover [ Color.background <| Color.greyscale 0.7 ]
                ]
            ]
        , Style.style Badge
            [ Border.rounded 2
            , Shadow.simple
            , Style.pseudo "active"
                [ Color.background Color.lightCharcoal
                , Shadow.box noShadow
                ]
            ]
        , Style.style Header
            [ Font.size (scaled 3)
            , Style.variation Title
                [ Font.size (scaled 10) ]
              --, Font.weight 4
              --, Color.text <| Color.greyscale 0.8
              --, Shadow.deep
              --, Color.background <| Color.greyscale 0.25
            ]
        , Style.style Nav
            [ Font.alignRight
            , Color.background <| Color.greyscale 0.75
            , Color.text Color.white
              -- , Shadow.simple
            ]
        , Style.style NavLink
            [ Font.alignRight
            , Color.text Color.lightGrey
            , Style.cursor "pointer"
            , Style.hover
                [ Color.background <| Color.greyscale 0.7
                ]
            ]
        , Style.style Hairline
            [ Color.border <| Color.rgba 0 0 0 0.1
            , Border.bottom 1
            ]
        , Style.style DeleteButton
            [ Border.rounded 2
            , Border.all 0
            , Color.background <| Color.greyscale 0.2
            , Color.text deleteRed
            , Shadow.deep
            , Style.hover [ Color.background <| Color.greyscale 0.25 ]
            , Style.pseudo "active"
                [ Shadow.box noShadow
                , Color.background <| Color.greyscale 0.3
                ]
            ]
        , Style.style NewButton
            [ Border.rounded 2
            , Shadow.simple
            , Border.all 0
            , Color.text Color.white
            , Color.background <| Color.greyscale 0.2
            , Style.hover [ Color.background <| Color.greyscale 0.25 ]
            , Style.pseudo "active"
                [ Color.background <| Color.greyscale 0.3
                , Shadow.box noShadow
                ]
            ]
        , Style.style Dropdown
            [ Color.background <| Color.greyscale 0.75
            , Shadow.deep
            ]
        , Style.style DropdownItem
            [ Color.text <| Color.lightGrey
              --, Color.background <| Color.darkGrey
              --, Style.hover [ Color.background <| Color.greyscale 0.3 ]
            , Color.background <| Color.greyscale 0.7
            , Style.hover [ Color.background <| Color.greyscale 0.65 ]
            , Style.variation NavMenu
                [ Color.background <| Color.greyscale 0.7
                , Style.hover [ Color.background <| Color.greyscale 0.65 ]
                ]
            ]
        ]


scaled =
    Scale.modular 16 1.05


babyElectric =
    Color.rgb 180 220 255


deleteRed =
    Color.rgb 220 100 150


noShadow =
    { offset = ( 0, 0 ), size = 0, blur = 0, color = Color.black }
