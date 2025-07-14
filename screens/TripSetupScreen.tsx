import React, { useState} from "react";
import { View, Text, Button, StyleSheet, TextInput, Alert } from "react-native";
import api from "../services/api";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types'; 

type Props = NativeStackScreenProps<RootStackParamList, 'TripSetup'>;

const TripSetupScreen: React.FC<Props> =  ({ navigation }) => {
    const [ userId, setUserId ] = useState("");
    const [ checkinTime, setCheckinTime ] = useState("");
    const [ tripName, setTripName ] = useState("");
    const [ tripDescription, setTripDescription ] = useState("");
    const [ personalDetails, setPersonalDetails ] = useState("");
    const [ riskLevel, setRiskLevel ] = useState(0);

    const submitTrip = async () => {
        try {
            const response = await api.post("/trips/create", {
                userId,
                checkinTime,
                tripName,
                tripDescription,
                personalDetails,
                riskLevel,
                tripStartTime: new Date().toISOString(), // Automatically set trip start time to now //
                checkInDeadline: new Date(checkinTime).toISOString(),
                routeData: [], // TEMP: Placeholder for route data //
                emergencyContacts: [], // TEMP: Placeholder for emergency contacts //
            });

            Alert.alert("Trip Created", JSON.stringify(response.data, null, 2));
        } catch (error) {
            console.error("Error creating trip:", error);
            Alert.alert("Error creating trip. Please try again.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create a New Trip</Text>
            <TextInput
                placeholder="User ID"
                value={userId}
                onChangeText={setUserId}
                style={styles.input}
            />
            <TextInput
                placeholder="Check-in Time"
                value={checkinTime}
                onChangeText={setCheckinTime}
                style={styles.input}
            />
            <TextInput
                placeholder="Trip Name"
                value={tripName}
                onChangeText={setTripName}
                style={styles.input}
            />
            <TextInput
                placeholder="Trip Description"
                value={tripDescription}
                onChangeText={setTripDescription}
                style={styles.input}
            />
            <TextInput
                placeholder="Personal Details"
                value={personalDetails}
                onChangeText={setPersonalDetails}
                style={styles.input}
            />
            <TextInput
                placeholder="Risk Level"
                value={String(riskLevel)}
                onChangeText={(text) => setRiskLevel(Number(text))}
                style={styles.input}
                keyboardType="numeric"
            />
            <Button title="Submit Trip" onPress={submitTrip} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: "center",
    },
    label: {
        fontSize: 18,
        marginVertical: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 4,
        padding: 12,
    },
});

export default TripSetupScreen;
