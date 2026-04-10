import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { FiUser, FiMail, FiShield, FiMapPin } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation('common');
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">
              {t('navigation.profile')}
            </h1>
            <p className="text-base-content/70">
              View and manage your profile information
            </p>
          </div>

          {/* Profile Card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              {/* Avatar Section */}
              <div className="flex items-center space-x-6 mb-8 pb-8 border-b border-base-300">
                <div className="avatar placeholder">
                  <div className="bg-primary text-primary-content rounded-full w-24 h-24">
                    <span className="text-4xl font-bold">
                      {user?.full_name?.charAt(0) || user?.username?.charAt(0)}
                    </span>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{user?.full_name}</h2>
                  <p className="text-base-content/70 capitalize">
                    {user?.role?.replace('_', ' ')}
                  </p>
                </div>
              </div>

              {/* Profile Information */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* User ID */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold flex items-center gap-2">
                      <FiUser /> User ID
                    </span>
                  </label>
                  <input
                    type="text"
                    value={user?.user_id || 'N/A'}
                    className="input input-bordered"
                    disabled
                  />
                </div>

                {/* Username */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold flex items-center gap-2">
                      <FiUser /> Username
                    </span>
                  </label>
                  <input
                    type="text"
                    value={user?.username || 'N/A'}
                    className="input input-bordered"
                    disabled
                  />
                </div>

                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold flex items-center gap-2">
                      <FiMail /> Email
                    </span>
                  </label>
                  <input
                    type="email"
                    value={user?.email || 'Not provided'}
                    className="input input-bordered"
                    disabled
                  />
                </div>

                {/* Role */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold flex items-center gap-2">
                      <FiShield /> Role
                    </span>
                  </label>
                  <input
                    type="text"
                    value={user?.role?.replace('_', ' ').toUpperCase() || 'N/A'}
                    className="input input-bordered capitalize"
                    disabled
                  />
                </div>

                {/* Panchayat ID */}
                {user?.panchayat_id && (
                  <div className="form-control md:col-span-2">
                    <label className="label">
                      <span className="label-text font-semibold flex items-center gap-2">
                        <FiMapPin /> Panchayat ID
                      </span>
                    </label>
                    <input
                      type="text"
                      value={user?.panchayat_id}
                      className="input input-bordered"
                      disabled
                    />
                  </div>
                )}
              </div>

              {/* Info Alert */}
              <div className="alert alert-info mt-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>
                  To update your profile information, please contact your administrator.
                </span>
              </div>
            </div>
          </div>

          {/* Account Stats */}
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="stat bg-base-100 rounded-lg shadow">
              <div className="stat-title">Account Status</div>
              <div className="stat-value text-success text-2xl">Active</div>
              <div className="stat-desc">Your account is in good standing</div>
            </div>

            <div className="stat bg-base-100 rounded-lg shadow">
              <div className="stat-title">Access Level</div>
              <div className="stat-value text-primary text-2xl capitalize">
                {user?.role?.replace('_', ' ')}
              </div>
              <div className="stat-desc">Current permission level</div>
            </div>

            <div className="stat bg-base-100 rounded-lg shadow">
              <div className="stat-title">Member Since</div>
              <div className="stat-value text-secondary text-2xl">2024</div>
              <div className="stat-desc">Active user</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
