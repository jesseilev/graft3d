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
              -- , Shadow.box
              --     { offset = ( -2, -2 )
              --     , size = -4
              --     , blur = 10
              --     , color = Color.black
              --     }
              -- , Border.all 1
              -- , Color.border Color.black
              -- , Shadow.textGlow Color.black 0.5
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
        ]


scaled =
    Scale.modular 16 1.618


babyElectric =
    Color.rgb 180 220 255
