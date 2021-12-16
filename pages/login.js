import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { WebAuth } from 'auth0-js';


import tw from "tailwind-styled-components"

import Layout from '../components/account/layout'

export default function Login() {
    // const router = useRouter();
    useEffect(() => {
        console.log(" --- start");
    })
    
    const [loginError, setLoginError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const webAuth = new WebAuth({
        domain:         process.env.NEXT_PUBLIC_AUTO0_CUSTOM_DOMAIN,
        // domain:         process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
        clientID:       process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID
    });

    function handleSubmit(e) {
        e.preventDefault();

        webAuth.login({
            username:       email,
            password:       password,
            responseType:   'id_token',
            redirectUri:    process.env.NEXT_PUBLIC_BASE_URL + 'admin/dashboard/'
        }, function (err,res) {
            // handle errors or continue
            setLoginError(err.description)
        });
    }

    function socialLogin(connectionType) {
        if (connectionType != '') {
            console.log(" --- connectionType => ", connectionType);
            webAuth.authorize({
                connection: connectionType,
                responseType:   'id_token',
                redirectUri:    process.env.NEXT_PUBLIC_BASE_URL + 'admin/dashboard/'
            }, function (err,res) {
                // handle errors or continue
                setLoginError(err.description)
            });
        }        
    }

    function loginFacebook(){
        socialLogin('facebook')
    }

    function loginTwitter(){
        socialLogin('twitter')
    }

    function loginGithub(){
        socialLogin('github')
    }    

    return (
        <Layout>
            <Container>
                <TitleContainer>
                    <a href="/">
                        <LogoImage
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                    </a>
                    <Title>Sign in to your account</Title>
                    <TrialLinkWrapper>
                        Or{' '}
                        <TrialLink href="#">start your 14-day free trial</TrialLink>
                    </TrialLinkWrapper>
                </TitleContainer>

                <BodyContainer>
                    <SignInFormWrapper>
                        {loginError && <LoginError>{loginError}</LoginError>}
                        <SignInForm onSubmit={handleSubmit}>
                            <InputGroup>
                                <InputLabel htmlFor="email">
                                Email address
                                </InputLabel>
                                <InputWrapper>
                                    <EmailInput
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                            setLoginError('')
                                        }}
                                        autoComplete="email"
                                        required
                                    />
                                </InputWrapper>
                            </InputGroup>

                            <InputGroup>
                                <InputLabel htmlFor="password">
                                Password
                                </InputLabel>
                                <InputWrapper>
                                    <PasswordInput
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                            setLoginError('')
                                        }}
                                        autoComplete="current-password"
                                        required
                                    />
                                </InputWrapper>
                            </InputGroup>

                            <InputGroupInline>
                                <RememberMeWrapper>
                                    <RememberMeInput
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                    />
                                    <RememberMeLabel htmlFor="remember-me">Remember me</RememberMeLabel>
                                </RememberMeWrapper>

                                <ResetPassLinkWrapper>
                                    <ResetPassLink href="#">Forgot your password?</ResetPassLink>
                                </ResetPassLinkWrapper>
                            </InputGroupInline>
                            <SignInButtonWrapper>
                                <SignInButton type="submit">
                                Sign in                                    
                                </SignInButton>
                            </SignInButtonWrapper>                            
                        </SignInForm>

                        <SocialLinksWrapper>
                            <DividerWrapper className="relative">
                                <Divider>
                                    <DividerBorder/>
                                </Divider>
                                <DividerTextWrapper>
                                    <DividerText>Or continue with</DividerText>
                                </DividerTextWrapper>
                            </DividerWrapper>

                            <SocialLinks>
                                <SocialLinkWrapper>
                                    <SocialLink href="#" 
                                        onClick={loginFacebook}
                                    >
                                        <SocialLinkSpan className="sr-only">Sign in with Facebook</SocialLinkSpan>
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </SocialLink>
                                </SocialLinkWrapper>

                                <SocialLinkWrapper>
                                    <SocialLink href="#" onClick={loginTwitter}>
                                        <SocialLinkSpan className="sr-only">Sign in with Twitter</SocialLinkSpan>
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </SocialLink>
                                </SocialLinkWrapper>

                                <SocialLinkWrapper>
                                    <SocialLink href="#" onClick={loginGithub}>
                                        <SocialLinkSpan className="sr-only">Sign in with GitHub</SocialLinkSpan>
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </SocialLink>
                                </SocialLinkWrapper>
                            </SocialLinks>
                        </SocialLinksWrapper>
                    </SignInFormWrapper>
                </BodyContainer>
            </Container>
        </Layout>
    )
}

const Container = tw.div`
    h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100
`

const TitleContainer = tw.div`
    sm:mx-auto sm:w-full sm:max-w-md
`

const LogoImage = tw.img`
    mx-auto h-12 w-auto
`

const Title = tw.h2`
    mt-6 text-center text-3xl font-extrabold text-gray-900
`

const TrialLinkWrapper = tw.p`
    mt-2 text-center text-sm text-gray-600
`

const TrialLink = tw.a`
    font-medium text-indigo-600 hover:text-indigo-500
`

const BodyContainer = tw.div`
    mt-8 sm:mx-auto sm:w-full sm:max-w-md
`

const SignInFormWrapper = tw.div`
    bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10
`

const SignInForm = tw.form`
    space-y-6
`

const InputLabel = tw.label`
    block text-sm font-medium text-gray-700
` 

const InputWrapper = tw.div`
    mt-1
` 

const EmailInput = tw.input`
    appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
` 

const PasswordInput = tw.input`
    appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
` 

const InputGroup = tw.div`

` 

const InputGroupInline = tw.div`
    flex items-center justify-between
` 

const RememberMeWrapper = tw.div`
    flex items-center
`

const RememberMeInput = tw.input`
    h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded
`

const RememberMeLabel = tw.label`
    ml-2 block text-sm text-gray-900
`

const ResetPassLinkWrapper = tw.div`
    text-sm
`

const ResetPassLink = tw.a`
    font-medium text-indigo-600 hover:text-indigo-500
`

const SignInButtonWrapper = tw.div`

`

const SignInButton = tw.button`
    w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
` 

const LoginError = tw.p `
    text-red-200 text-center py-4 bg-gray-200 mb-4 rounded font-semibold text-red-600
`

const SocialLinksWrapper = tw.div`
    mt-6
`

const DividerWrapper = tw.div`
    relative
`

const Divider = tw.div`
    absolute inset-0 flex items-center
`

const DividerBorder = tw.div`
    w-full border-t border-gray-300
`

const DividerTextWrapper = tw.div`
    relative flex justify-center text-sm
`

const DividerText = tw.span`
    px-2 bg-white text-gray-500
`

const SocialLinks = tw.div`
    mt-6 grid grid-cols-3 gap-3
`

const SocialLinkWrapper = tw.div`

`

const SocialLink = tw.a`
    w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50
`

const SocialLinkSpan = tw.span`
    sr-only
`
