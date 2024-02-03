import { useState } from 'react'
import { Text, View, ScrollView, SafeAreaView } from 'react-native'
import { Stack, useRouter } from 'expo-router'


import { COLORS, icons, images, SIZES } from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'


const Home = () => {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, }}>
                <Stack.Screen options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite, padding: SIZES.medium },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
                    ),
                    headerTitle: ""
                }} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}>
                        <Welcome
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            handleClick={()=>{
                                if (searchQuery) {
                                    router.push(`/search/${searchQuery}`)
                                }
                            }}
                        />
                        <Popularjobs />
                        <Nearbyjobs />
                    </View>
                </ScrollView>
            </SafeAreaView>


        </>
    )
}

export default Home
