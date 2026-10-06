import { TextCustom, ViewCustom } from "@/src/shared/components/Themed";
import { StyleSheet, View } from "react-native";

interface Props {
  name: string;
  role: string;
  status: 'online' | 'offline';
  badgeColor: string;
}

export const UserProfileCard = ({
  name,
  role,
  status,
  badgeColor = '#34C759'
}: Props) => {
  return (
    <ViewCustom style={styles.profileCard}>
      <View style={styles.avatarContainer}>
        <View style={[styles.avatar, {backgroundColor: badgeColor}]}>
          <TextCustom style={styles.avatarText}>
            {name.charAt(0).toUpperCase()}
          </TextCustom>
        </View>
        <View
          style={[
            styles.statusIndicator,
            {backgroundColor: status === 'online' ? '#34C759' : '#8E8E93'}
          ]}
        />
      </View>

      <View style={styles.infoContainer}>
        <TextCustom style={styles.userName}>{name}</TextCustom>
        <TextCustom style={styles.userRole}>{role}</TextCustom>
      </View>
    </ViewCustom>
  )
}

const styles = StyleSheet.create({
  profileCard: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(150, 150, 150, 0.15)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  avatarContainer: { position: 'relative'},
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderWidth: 2,
    borderColor: '#1C1C1E',
  },
  infoContainer: {flex: 1, gap: 2},
  userName: { fontSize: 16, fontWeight: '700'},
  userRole: { fontSize: 13, opacity: 0.65},

})