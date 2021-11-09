import React from 'react'

// Packages
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Hidden from '@mui/material/Hidden'
import TextField from '@mui/material/TextField'
import CssBaseline from '@mui/material/CssBaseline'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa'

// Components
import { SharedButton } from '../components'

const zuriPlatformImageText = [
  {
    id: 1,
    image: '/assets/pages/landing-page/manageDAO.png',
    text:
      'You can manage our DAO in Zuri - from voting to treasury to rewarding tasks.'
  },
  {
    id: 2,
    image: '/assets/pages/landing-page/useAR.png',
    text:
      'You can use AR glasses to have meetings where you can see everyone else.'
  },
  {
    id: 3,
    image: '/assets/pages/landing-page/virtualWorkspaces.png',
    text:
      'You can live in animated, virtual workspaces - chat by the cooler, listen to music and play games.'
  }
]

const Index = () => (
  <>
    <CssBaseline />
    {/* Logo */}
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: { xs: '20px', md: '50px' }
      }}
    >
      <Image src='/assets/zuri-chat/logo.svg' width='30%' height='100%' />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '20px',
          fontSize: { xs: '25px', md: '30px' },
          fontWeight: 900
        }}
      >
        ZURI CHAT
      </Box>
    </Box>

    {/* Jumbotron CTA */}
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            width: '50%',
            fontWeight: 400,
            fontSize: { md: '20px' },
            textAlign: 'center'
          }}
        >
          THE FUTURE OF REMOTE WORK IN THE METAVERSE IS BEING BUILT
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            width: { xs: '80%', md: '70%' },
            textAlign: 'center',
            fontWeight: 800,
            fontSize: { xs: '22px', md: '45px' },
            paddingTop: '20px'
          }}
        >
          <Box sx={{ color: '#878787' }}>
            Network. Collaborate.
            <br />
            Educate. Learn Remotely.
            <br />
          </Box>
          <span>Work remote and still feel the togetherness.</span>
        </Box>
      </Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}
      >
        <Box
          sx={{
            width: { xs: '80%', md: '30%' },
            textAlign: 'center',
            fontWeight: 400,
            fontSize: '17px'
          }}
        >
          We are building the platform that will power remote work in the Web3
          future and make it feel as good as sitting across the desk from your
          friends. Remote work that still allows for those moments of
          serependity.
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '20px',
              width: '400px'
            }}
          >
            <TextField
              sx={{
                width: { xs: '80%', md: '90%' },
                fontWeight: 400,
                fontSize: '20px',
                '& .MuiOutlinedInput-input': {
                  borderRadius: '3px'
                }
              }}
              placeholder='Enter your e-mail'
              variant='outlined'
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '20px',
              '& .MuiButton-root': {
                textTransform: 'none',
                fontSize: '20px',
                backgroundColor: '#00b87c',
                boxShadow: 0
              }
            }}
          >
            <SharedButton variant='contained'>Join the waitlist</SharedButton>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Hidden mdDown>
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '300px', md: '850px', xl: '950px' }
            }}
          >
            <Image
              src='/assets/pages/landing-page/laptop.png'
              width='921px'
              height='616px'
            />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              left: { md: '700px', lg: '900px', xl: '1200px' },
              top: '920px'
            }}
          >
            <Image
              src='/assets/pages/landing-page/phone.png'
              width='462px'
              height='784px'
            />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <Box
            sx={{
              position: 'absolute',
              left: '4px',
              top: '760px'
            }}
          >
            <Image
              src='/assets/pages/landing-page/laptop.png'
              width='322.15px'
              height='215.46px'
            />
          </Box>
          <Box sx={{ position: 'absolute', left: '240px', top: '770px' }}>
            <Image
              src='/assets/pages/landing-page/phone.png'
              width='161px'
              height='262px'
            />
          </Box>
        </Hidden>
      </Box>
    </Box>

    {/* Zuri Chat is a platform */}
    <Box
      sx={{
        background: '#f3fffB',
        minHeight: { xs: '100vh', md: '500px' },
        position: 'absolute',
        top: { xs: '900px', md: '1200px', lg: '1300px' },
        minWidth: '100vw',
        paddingTop: '20px',
        paddingBottom: '100px'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            paddingTop: { xs: '35px', md: '60px' },
            width: '75%',
            textAlign: 'center',
            fontWeight: 800,
            fontSize: { xs: '18px', md: '30px' }
          }}
        >
          Zuri Chat is a platform on which an infinite number of powerful
          collaboration apps can be built.
        </Box>
      </Box>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        sx={{ paddingTop: { xs: '60px', md: '90px' } }}
      >
        {zuriPlatformImageText.map(({ id, image, text }) => (
          <Grid key={id} item xs={12} lg={4}>
            <Box
              key={id}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: '60px',
                paddingRight: '60px'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Image src={image} width='402px' height='301px' />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: '30px'
                }}
              >
                <Box
                  sx={{
                    width: '95%',
                    textAlign: 'center',
                    fontSize: '16px',
                    fontWeight: 500,
                    paddingBottom: '30px'
                  }}
                >
                  {text}
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
    <Box>
      <Box
        sx={{
          background: 'white',
          minHeight: { xs: '60vh', md: '500px' },
          minWidth: '100vw',
          position: 'absolute',
          top: { xs: '2200px', md: '2700px', lg: '2100px' },
          paddingBottom: '100px'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              paddingTop: { xs: '35px', md: '60px' },
              width: { xs: '75%', md: '90%' },
              textAlign: 'center',
              fontWeight: 700,
              fontSize: { xs: '18px', md: '40px' }
            }}
          >
            Web3 native, built by NFT holders - our Zuri Kings & Queens
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            paddingTop: { xs: '30px', md: '70px' }
          }}
        >
          <Image
            src='/assets/pages/landing-page/nftOne.png'
            width='100%'
            height='100%'
          />
          <Image
            src='/assets/pages/landing-page/nftTwo.png'
            width='100%'
            height='100%'
          />
          <Image
            src='/assets/pages/landing-page/nftThree.png'
            width='100%'
            height='100%'
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '50px'
          }}
        >
          <Box
            sx={{
              width: '90%',
              textAlign: 'center',
              fontSize: { xs: '16px', md: '20px' },
              fontWeight: 500,
              paddingBottom: '30px'
            }}
          >
            Zuri Chat is currently being built by the ZuriDAO. We are about 500
            developers, designers and other talented people, working to make the
            Zuri Chat platform a reality. We operate as a Distributed,
            Autonomous Organisation.
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              paddingTop: { xs: '35px', md: '60px' },
              width: { xs: '75%', md: '65%' },
              textAlign: 'center',
              fontWeight: 700,
              fontSize: { xs: '18px', md: '30px' }
            }}
          >
            Only People with valid NFTs can join the DAO and become contributors
            to the project.
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '20px',
            height: '80px',
            '& .MuiButton-root': {
              textTransform: 'none',
              fontSize: '15px',
              backgroundColor: '#00b87c',
              boxShadow: 0
            }
          }}
        >
          <SharedButton variant='contained'>
            Purchase your NFT on OpenSea
          </SharedButton>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '50px'
          }}
        >
          <Box
            sx={{
              width: '100%',
              textAlign: 'center',
              fontSize: { xs: '16px', md: '20px' },
              fontWeight: 500,
              paddingBottom: '30px'
            }}
          >
            Quick Guide to the NFTs
            <Box sx={{ color: '#D44141' }}>
              (read this before making a purchase)!
            </Box>
          </Box>
        </Box>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          sx={{ paddingTop: { xs: '60px', md: '90px' } }}
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '30px'
              }}
            >
              <Box sx={{ mr: 3 }}>
                <Image
                  src='/assets/pages/landing-page/blankRectangle.png'
                  width='70%'
                  height='61%'
                />
              </Box>
              <Box sx={{ width: '50%', alignSelf: 'center', fontWeight: 600 }}>
                Hats mean the owner is or has been a team lead.
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '30px'
              }}
            >
              <Box sx={{ mr: 3 }}>
                <Image
                  src='/assets/pages/landing-page/blankRectangle.png'
                  width='70%'
                  height='61%'
                />
              </Box>
              <Box
                sx={{
                  width: '50%',
                  alignSelf: 'center',
                  fontWeight: 600
                }}
              >
                Necklaces mean that this NFT can vote in the DAO. Number of
                notches determine voting power.
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
    <Box
      sx={{
        background: '#f3fffB',
        minHeight: { xs: '60vh', md: '500px' },
        minWidth: '100vw',
        position: 'absolute',
        top: { xs: '3400px', md: '3700px', lg: '3200px' },
        paddingBottom: '100px'
      }}
    >
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        sx={{ paddingTop: { xs: '60px', md: '90px' } }}
      >
        <Grid item xs={12} md={6}>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                sx={{
                  paddingTop: { xs: '35px', md: '60px' },
                  width: '75%',
                  textAlign: 'center',
                  fontWeight: 800,
                  fontSize: { xs: '20px', md: '40px' }
                }}
              >
                View the Source Code
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '30px'
              }}
            >
              <Box
                sx={{
                  width: { xs: '90%', md: '70%' },
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: 500,
                  paddingBottom: '30px'
                }}
              >
                Zuri Chat is not an open source project, but it’s an open code
                project. Our source code cannot be forked, but it can be viewed
                on our repositories openly. The code is owned with full
                copyright by all DAO members. This is a different licensing
                model from open source projects. It means we are fully open, but
                to interact with our code, you need to be a DAO member.
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '20px',
                '& .MuiButton-root': {
                  textTransform: 'none',
                  fontSize: '20px',
                  backgroundColor: '#00b87c',
                  boxShadow: 0
                }
              }}
            >
              <SharedButton variant='contained'>View on Github </SharedButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                paddingTop: { xs: '60px', md: '60px' },
                width: '75%',
                textAlign: 'center',
                fontWeight: 800,
                fontSize: { xs: '20px', md: '40px' }
              }}
            >
              View the Zuri Token
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '30px'
            }}
          >
            <Box
              sx={{
                width: '90%',
                textAlign: 'center',
                fontSize: '16px',
                fontWeight: 500,
                paddingBottom: '30px'
              }}
            >
              The Zuri Token will be used a utility token in the final Zuri Chat
              app. When workspaces are created, the Zuri Token will be used for
              certain functionality. More will be made known when the whitepaper
              is released.
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '20px',
              '& .MuiButton-root': {
                textTransform: 'none',
                fontSize: '20px',
                backgroundColor: '#00b87c',
                boxShadow: 0
              }
            }}
          >
            <SharedButton variant='contained'>View on BSC Scan</SharedButton>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '20px',
              '& .MuiButton-root': {
                textTransform: 'none',
                fontSize: '20px',
                backgroundColor: '#00b87c',
                boxShadow: 0
              }
            }}
          >
            <SharedButton variant='contained'>View on PancakeSwap</SharedButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
    <Box
      sx={{
        background: 'white',
        minHeight: { xs: '60vh', md: '500px' },
        minWidth: '100vw',
        position: 'absolute',
        top: { xs: '4150px', md: '4500px', lg: '3900px' },
        padding: { xs: '30px', md: '50px' }
      }}
    >
      <Box
        sx={{
          background:
            'linear-gradient(271.87deg, #00B87C 6.91%, #00BC7F 23.76%, #00C081 50.46%, #01D892 94.13%)',
          minHeight: { xs: '60vh', md: '500px' },
          minWidth: '30vw',
          borderRadius: '15px',
          padding: { xs: '25px', md: '80px' },
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' }
        }}
      >
        <Box>
          <Box
            sx={{
              fontSize: { xs: '30px', md: '50px' },
              color: 'white',
              fontWeight: 800
            }}
          >
            The new way
            <br />
            of working
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'column', lg: 'row' }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                paddingTop: '20px',
                width: { md: '400px' }
              }}
            >
              <TextField
                sx={{
                  width: { xs: '80%', md: '90%' },
                  fontWeight: 400,
                  fontSize: '20px',
                  '& .MuiOutlinedInput-input': {
                    borderRadius: '3px',
                    background: 'white'
                  }
                }}
                placeholder='Enter your e-mail'
                variant='outlined'
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: '200px',
                paddingTop: '20px',
                '& .MuiButton-root': {
                  textTransform: 'none',
                  fontSize: '20px',
                  backgroundColor: '#00b87c',
                  boxShadow: 0
                }
              }}
            >
              <SharedButton variant='contained'>Join the waitlist</SharedButton>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            paddingTop: { xs: '50px', lg: '0px' },
            paddingLeft: { md: '50px' }
          }}
        >
          <Image
            src='/assets/pages/landing-page/newWay.png'
            width='533px'
            height='410px'
          />
        </Box>
      </Box>
      {/* Footer */}
      <Box>
        <Box
          sx={{ paddingTop: '70px', display: 'flex', justifyContent: 'center' }}
        >
          {[
            { id: 1, icon: <FaFacebookF />, fontSize: '27px' },
            { id: 2, icon: <FaTwitter />, fontSize: '30px' },
            { id: 3, icon: <FaInstagram />, fontSize: '30px' },
            { id: 4, icon: <FaLinkedinIn />, fontSize: '30px' }
          ].map(({ id, icon, fontSize }) => (
            <Box key={id} fontSize={fontSize} sx={{ padding: '15px' }}>
              {icon}
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            paddingTop: '30px',
            paddingBottom: '40px',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '20px'
          }}
        >
          {new Date().getFullYear()} Zuri Chat. All rights reserved.
        </Box>
      </Box>
    </Box>
  </>
)

export default Index
