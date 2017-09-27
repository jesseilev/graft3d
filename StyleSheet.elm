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


type Variation
    = Selected


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
            ]
        , Style.style Sidebar
            [ Color.background Color.lightGrey
            , Border.right 1
            , Color.border Color.grey
            , Shadow.box
                { offset = ( 10, 0 )
                , blur = 30
                , size = -10
                , color = Color.black
                }
            ]
        , Style.style SelectorItem
            [ Color.background Color.lightGrey
            , Style.hover [ Color.background Color.grey ]
            , Style.variation Selected
                [ Color.background Color.darkGrey
                , Style.hover [ Color.background Color.darkGrey ]
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
            [ Font.size (scaled 2) ]
        , Style.style Nav
            [ Font.alignRight
            , Color.background <| Color.greyscale 0.75
            , Color.text Color.white
              -- , Shadow.simple
            ]
        , Style.style NavLink
            [ Font.alignRight ]
        , Style.style Hairline
            [ Color.border Color.black ]
        , Style.style DeleteButton
            [ Border.rounded 2
            , Border.all 2
            , Color.border <| Color.rgb 220 60 60
            , Color.text <| Color.white
            , Color.background <| Color.rgb 220 60 60
            , Font.size (scaled -1)
            ]
        , Style.style NewButton
            [ Border.rounded 2
            , Shadow.simple
            , Color.text Color.white
            , Style.hover [ Color.background Color.darkGrey ]
            , Style.pseudo "active"
                [ Color.background Color.lightCharcoal
                , Shadow.box noShadow
                ]
            ]
        ]


scaled =
    Scale.modular 16 1.618


babyElectric =
    Color.rgb 180 220 255


noShadow =
    { offset = ( 0, 0 ), size = 0, blur = 0, color = Color.black }
